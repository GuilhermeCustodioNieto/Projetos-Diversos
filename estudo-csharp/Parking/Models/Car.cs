using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parking.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string LicensePlate { get; set; }

        public Car(int id, string licensePlate)
        {
            Id = id;
            LicensePlate = licensePlate;
        }

        public Car() { }
    }
}