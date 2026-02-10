using Hosting.Models.Exceptions;

namespace Hosting.Models
{
    public class Accomodation
    {
        private List<Person> _guests = new List<Person>();
        public List<Person> Guests
        {
            get { return _guests; }
            set
            {
                if (value.Count() > Suite.Capacity) throw new SuiteCapacityException();
                else
                {
                    _guests = value;
                }
            }
        }

        public Suite Suite { get; set; }
        public int ReservedDays { get; set; }

        public void AddGuest(Person person)
        {
            if (this._guests.Count() > Suite.Capacity)
            {
                throw new SuiteCapacityException();
            }
            _guests.Add(person);
        }

        public void RemoveGuests(Person person)
        {
            _guests.Remove(person);
        }

        public Accomodation(Suite suite, List<Person> guests, int reservedDays)
        {
            if (this._guests.Count() > suite.Capacity)
            {
                throw new SuiteCapacityException();
            }

            this.Suite = suite;
            this.ReservedDays = reservedDays;
            this.Guests = guests;
        }

    }
}