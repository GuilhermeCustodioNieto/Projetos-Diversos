using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Phone
{
    public abstract class Smartphone
    {
        public string Numero { get; set; }
        public string Modelo { get; set; }
        public string IMEI { get; set; }
        public int Memoria { get; set; }
        public Smartphone(string numero, string modelo, string imei, int memoria)
        {
            this.Numero = numero;
            this.Modelo = modelo;
            this.IMEI = imei;
            this.Memoria = memoria;
        }

        public void Ligar()
        {
            Console.WriteLine("Ligando...");
        }

        public void ReceberLigacao()
        {
            Console.WriteLine("Você está recebendo uma ligação...");
        }

        public abstract void InstalarAplicativo(string nome);
    }
}