import { Module } from '@nestjs/common';
import { BookstoreApiGatewayController } from './bookstore-api-gateway.controller';
import { BookstoreApiGatewayService } from './bookstore-api-gateway.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [BookstoreApiGatewayController],
  providers: [BookstoreApiGatewayService, UsersService],
})
export class BookstoreApiGatewayModule {}
