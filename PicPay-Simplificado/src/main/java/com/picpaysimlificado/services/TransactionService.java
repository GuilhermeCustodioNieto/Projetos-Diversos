package com.picpaysimlificado.services;

import com.picpaysimlificado.domain.transaction.Transaction;
import com.picpaysimlificado.domain.user.User;
import com.picpaysimlificado.dtos.TransactionDTO;
import com.picpaysimlificado.repositories.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.Map;
import java.util.Objects;

import static com.fasterxml.jackson.databind.type.LogicalType.Map;

@Service
public class TransactionService {
    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private NotificationService notificationService;

    public Transaction createTransaction(TransactionDTO transaction) throws Exception {
        User sender = userService.findUserById(transaction.senderId());
        User receiver = userService.findUserById(transaction.receiverId());

        userService.validateTransaction(sender, transaction.value());

        boolean isAuthorized = this.authorizeTransaction(sender, transaction.value());
        if(!isAuthorized){
            throw new Exception("Transação não autorizada");
        }

        Transaction newTransaction = new Transaction();
        newTransaction.setAmount(transaction.value());
        newTransaction.setSender(sender);
        newTransaction.setReceiver(receiver);
        newTransaction.setTimestamp(LocalDateTime.now());

        sender.setBalance(sender.getBalance().subtract(transaction.value()));
        receiver.setBalance(receiver.getBalance().add(transaction.value()));

        this.transactionRepository.save(newTransaction);
        this.userService.saveUser(sender);
        this.userService.saveUser(receiver);

        this.notificationService.sendNotification(sender, "Trancação realziada com sucesso");
        this.notificationService.sendNotification(receiver, "Transação recebida com sucesso");

        return newTransaction;
    }

    public boolean authorizeTransaction(User sender, BigDecimal value) throws Exception {
        ResponseEntity<Map> authorizationResponse;

        try{
            authorizationResponse = restTemplate.getForEntity(
                    "https://util.devi.tools/api/v2/authorize",
                    java.util.Map.class
            );
        }catch (HttpClientErrorException e){
            throw new Exception("Transação não autorizada");
        }

        Map<String, Object> body = authorizationResponse.getBody();
        System.out.println(body);

        if (authorizationResponse.getStatusCode() == HttpStatus.OK && body != null) {
            Object dataObj = body.get("data");

            if (dataObj instanceof Map<?, ?> data) {
                Object authObj = data.get("authorization");

                if (!(authObj instanceof Boolean && (Boolean) authObj)) {
                    throw new Exception("Transação não autorizada");
                }
            }
        }

        return true;
    }

}
