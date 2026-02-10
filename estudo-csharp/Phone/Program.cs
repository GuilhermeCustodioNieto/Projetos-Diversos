using Phone.Models;


Console.WriteLine("Mexendo no nokia");
Nokia nokia = new Nokia(numero: "1", modelo: "Nokia 1", imei: "asdsadsa", memoria: 1);
nokia.Ligar();
nokia.ReceberLigacao();
nokia.InstalarAplicativo("Angry Birds");

Console.WriteLine("Mexendo no Iphone");
Iphone iphone = new Iphone(numero: "2", modelo: "Nokia 2", imei: "brab", 2);
iphone.Ligar();
iphone.ReceberLigacao();
iphone.InstalarAplicativo("Angry Birds");
