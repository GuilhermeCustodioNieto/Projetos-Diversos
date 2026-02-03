using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Parking.Models
{
    public class CarSheet
    {
        public int Id { get; set; }
        public Car Car { get; set; } = null;
        public int Time { get; set; }

        public CarSheet(int id, Car car)
        {
            Id = id;
            Car = car;
            Time = 0;
        }

        public CarSheet(int id) { Id = id; Time = 0; }
    }
}