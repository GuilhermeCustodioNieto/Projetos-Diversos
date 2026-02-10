using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hosting.Models
{
    public class Suite
    {
        public string SuiteType { get; set; }
        public int Capacity { get; set; }
        public decimal DailyPrice { get; set; }

        public Suite(string suiteType, int capacity, decimal dailyPrice)
        {
            this.SuiteType = suiteType;
            this.Capacity = capacity;
            this.DailyPrice = dailyPrice;
        }
    }
}