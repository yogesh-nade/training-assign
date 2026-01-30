using System;

namespace Yogesh_Nade_c_Assignment
{
    abstract class Employee
    {
        public int EmployeeId { get; set; }
        public string EmployeeName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Department { get; set; }
        public double Salary { get; set; }

        public Employee(int id, string name, string address, string city, string dept, double salary)
        {
            EmployeeId = id;
            EmployeeName = name;
            Address = address;
            City = city;
            Department = dept;
            Salary = salary;
        }

        public abstract double GetSalary();
    }

    class ContractEmployee : Employee
    {
        public double Perks { get; set; }

        public ContractEmployee(int id, string name, string address, string city,
                                string dept, double salary, double perks)
            : base(id, name, address, city, dept, salary)
        {
            Perks = perks;
        }

        public override double GetSalary()
        {
            return Salary + Perks;
        }
    }

    class PermanentEmployee : Employee
    {
        public double NoOfLeaves { get; set; }
        public double ProvidentFund { get; set; }

        public PermanentEmployee(int id, string name, string address, string city,
                                 string dept, double salary, double pf, double leaves)
            : base(id, name, address, city, dept, salary)
        {
            ProvidentFund = pf;
            NoOfLeaves = leaves;
        }

        public override double GetSalary()
        {
            return Salary - ProvidentFund;
        }
    }

    class Q9
    {
        public static void Run()
        {
            Console.WriteLine("Select Employee Type:");
            Console.WriteLine("1. Contract Employee");
            Console.WriteLine("2. Permanent Employee");
            Console.Write("Enter choice: ");

            int choice = int.Parse(Console.ReadLine());
            Employee emp = null;

            Console.Write("Employee ID: ");
            int id = int.Parse(Console.ReadLine());

            Console.Write("Employee Name: ");
            string name = Console.ReadLine();

            Console.Write("Address: ");
            string address = Console.ReadLine();

            Console.Write("City: ");
            string city = Console.ReadLine();

            Console.Write("Department: ");
            string dept = Console.ReadLine();

            Console.Write("Base Salary: ");
            double salary = double.Parse(Console.ReadLine());

            if (choice == 1)
            {
                Console.Write("Perks: ");
                double perks = double.Parse(Console.ReadLine());

                emp = new ContractEmployee(id, name, address, city, dept, salary, perks);
            }
            else if (choice == 2)
            {
                Console.Write("Provident Fund: ");
                double pf = double.Parse(Console.ReadLine());

                Console.Write("No of Leaves: ");
                double leaves = double.Parse(Console.ReadLine());

                emp = new PermanentEmployee(id, name, address, city, dept, salary, pf, leaves);
            }
            else
            {
                Console.WriteLine("Invalid choice");
                return;
            }

            Console.WriteLine("\nFinal Salary: " + emp.GetSalary());
        }
    }
}
