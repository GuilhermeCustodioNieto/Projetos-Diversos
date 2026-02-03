using Parking.Models;


ParkingService parking = new ParkingService();
Random random = new Random();

Console.WriteLine("Welcome to the Parking Management System");

Console.Write("Enter the static tax: ");
decimal staticTax = decimal.Parse(Console.ReadLine());

Console.Write("Enter the hour tax: ");
decimal hourTax = decimal.Parse(Console.ReadLine());
do
{

    Console.WriteLine("1 - Add Car\n2 - List Cars\n3 - Remove Car\n4 - Exit");
    int choose = int.Parse(Console.ReadLine());

    switch (choose)
    {
        case 1:

            Console.Write("Write the licence plate of the car: ");
            string addPlate = Console.ReadLine();

            Car car = new Car(random.Next(10000), addPlate);
            parking.CarSheets.Add(new CarSheet(random.Next(10000), car));
            break;

        case 2:
            parking.ListCarSheets();
            break;
        case 3:
            Console.Write("Write the car plate to remove: ");
            string removePlate = Console.ReadLine();
            CarSheet carSheet = parking.CarSheets.Single(s => s.Car.LicensePlate == removePlate);

            Console.WriteLine("Write how many hours the car stay here:");
            int hours = int.Parse(Console.ReadLine());

            Console.WriteLine($"The paid value is: {staticTax + (hourTax * hours)}");

            parking.RemoveCarSheet(carSheet);
            break;
        case 4:
            Console.WriteLine("GoodBye!");
            return;
    }

    Console.WriteLine("\nPress Enter to continue...");
    Console.ReadLine();
    Console.Clear();

} while (true);