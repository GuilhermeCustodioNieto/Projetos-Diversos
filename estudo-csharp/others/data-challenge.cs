using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        // Lê uma linha contendo as tarefas separadas por espaço
        string input = Console.ReadLine();

        // Converte a entrada em uma lista de tarefas
        List<string> tarefas = new List<string>(input.Split(' '));
        List<string> resultado = new List<string>();
        int tarefasFeitas = 0;

        foreach (string tarefa in tarefas)
        {
            if (tarefa == "feito")
            {
                tarefasFeitas++;
            }
            else
            {
                resultado.Add(tarefa);
            }


        }

        for (int i = 0; i < tarefasFeitas; i++)
        {
            resultado.Add("feito");
        }

        Console.WriteLine(string.Join(" ", resultado));


        // TODO: Separe as tarefas realizadas ("feito") das tarefas pendentes,
        //       mantendo a ordem relativa de ambas nas listas.

        // Dica: Percorra todas as tarefas e utilize duas listas diferentes.

        // Após separar, coloque primeiro as pendentes e depois todas as "feito"
        // List<string> resultado = ... // Monte a lista final aqui

        // Imprime as tarefas reordenadas
        // Console.WriteLine(string.Join(" ", resultado));
    }
}