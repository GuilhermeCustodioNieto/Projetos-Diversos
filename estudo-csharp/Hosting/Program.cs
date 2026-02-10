using Hosting.Models;

List<Person> guests = new List<Person>();

Person person1 = new Person(name: "Guilherme", surname: "Custódio");
Person person2 = new Person(name: "Vanessa", surname: "Fadinha");

guests.Add(person1);
guests.Add(person2);

Suite suite = new Suite(suiteType: "Para casal", capacity: 2, dailyPrice: 350.99M );

Accomodation accomodation = new Accomodation(suite: suite, guests: guests, reservedDays: 5);
