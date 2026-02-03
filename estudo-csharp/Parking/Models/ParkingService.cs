using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parking.Models
{
    public class ParkingService
    {
        public int Id { get; set; }
        public decimal Tax { get; set; }
        public List<CarSheet> CarSheets { get; set; } = new List<CarSheet>();

        public ParkingService()
        {

        }

        public void AddCarSheet(CarSheet carSheet)
        {
            CarSheets.Add(carSheet);
        }

        public void RemoveCarSheet(CarSheet carSheet)
        {
            CarSheets.Remove(carSheet);
        }

        public void ListCarSheets()
        {
            foreach (var carSheet in CarSheets)
            {
                Console.WriteLine(carSheet.Car.LicensePlate);
            }
        }
    }
}