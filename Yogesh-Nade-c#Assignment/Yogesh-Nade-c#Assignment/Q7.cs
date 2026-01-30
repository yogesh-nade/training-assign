using System;
using System.Collections.Generic;

namespace Yogesh_Nade_c_Assignment
{
    class Candidate
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Email { get; set; }
        public string Contact { get; set; }
        public char Gender { get; set; }

        public void Display()
        {
            Console.WriteLine($"{Name}\t{BirthDate.ToShortDateString()}\t{Email}\t{Contact}\t{Gender}");
        }
    }

    class Manager
    {
        private List<Candidate> candidates = new List<Candidate>();

        public Manager()
        {
            candidates.Add(new Candidate { Name = "Asha", BirthDate = new DateTime(1996, 3, 15), Email = "asha@mail.com", Contact = "999111", Gender = 'F' });
            candidates.Add(new Candidate { Name = "Rahul", BirthDate = new DateTime(1998, 12, 10), Email = "rahul@mail.com", Contact = "999222", Gender = 'M' });
            candidates.Add(new Candidate { Name = "Neha", BirthDate = new DateTime(1995, 3, 5), Email = "neha@mail.com", Contact = "999333", Gender = 'F' });
            candidates.Add(new Candidate { Name = "Arjun", BirthDate = new DateTime(1994, 6, 20), Email = "arjun@mail.com", Contact = "999444", Gender = 'M' });
            candidates.Add(new Candidate { Name = "Priya", BirthDate = new DateTime(1999, 12, 25), Email = "priya@mail.com", Contact = "999555", Gender = 'F' });
        }

        public void DisplayBornInMarch()
        {
            Console.WriteLine("\nCandidates born in March:");
            foreach (var c in candidates)
            {
                if (c.BirthDate.Month == 3)
                    c.Display();
            }
        }

        public void DisplayBornBefore1997()
        {
            Console.WriteLine("\nCandidates born before 1997:");
            foreach (var c in candidates)
            {
                if (c.BirthDate.Year < 1997)
                    c.Display();
            }
        }

        public void DisplayFemaleCandidates()
        {
            Console.WriteLine("\nFemale candidates:");
            foreach (var c in candidates)
            {
                if (c.Gender == 'F')
                    c.Display();
            }
        }

        public void CountBornInDecember()
        {
            int count = 0;
            foreach (var c in candidates)
            {
                if (c.BirthDate.Month == 12)
                    count++;
            }

            Console.WriteLine($"\nNumber of candidates born in December: {count}");
        }
    }

    class Q7
    {
        public static void Run()
        {
            Manager manager = new Manager();

            manager.DisplayBornInMarch();
            manager.DisplayBornBefore1997();
            manager.DisplayFemaleCandidates();
            manager.CountBornInDecember();
        }
    }
}
