using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hosting.Models.Exceptions
{
    public class SuiteCapacityException : Exception
    {
        public SuiteCapacityException() : base("The suite's capacity was exceeded.")
        {

        }

        public SuiteCapacityException(string message) : base(message) { }
    }
}