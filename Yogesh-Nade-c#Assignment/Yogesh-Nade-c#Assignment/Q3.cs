using System;
using System.Collections.Generic;

namespace Yogesh_Nade_c_Assignment
{
    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public double Price { get; set; }

        public void Display()
        {
            Console.WriteLine($"{Make}\t{Model}\t{Year}\t{Price}");
        }
    }

    class CarCatalog
    {
        private List<Car> cars = new List<Car>();

        public void AddCar()
        {
            Car car = new Car();

            Console.Write("Enter Make: ");
            car.Make = Console.ReadLine();

            Console.Write("Enter Model: ");
            car.Model = Console.ReadLine();

            Console.Write("Enter Year: ");
            car.Year = int.Parse(Console.ReadLine());

            Console.Write("Enter Price: ");
            car.Price = double.Parse(Console.ReadLine());

            cars.Add(car);
            Console.WriteLine("Car added successfully.\n");
        }

        public void ModifyCar()
        {
            Console.Write("Enter Model to modify: ");
            string model = Console.ReadLine();

            Car car = cars.Find(c => c.Model == model);

            if (car != null)
            {
                Console.Write("Enter new Price: ");
                car.Price = double.Parse(Console.ReadLine());
                Console.WriteLine("Car updated successfully.\n");
            }
            else
            {
                Console.WriteLine("Car not found.\n");
            }
        }

        public void SearchCar()
        {
            Console.Write("Enter Model to search: ");
            string model = Console.ReadLine();

            Car car = cars.Find(c => c.Model == model);

            if (car != null)
            {
                Console.WriteLine("Make\tModel\tYear\tPrice");
                car.Display();
                Console.WriteLine();
            }
            else
            {
                Console.WriteLine("Car not found.\n");
            }
        }

        public void ListCars()
        {
            if (cars.Count == 0)
            {
                Console.WriteLine("No cars available.\n");
                return;
            }

            Console.WriteLine("Make\tModel\tYear\tPrice");
            foreach (Car car in cars)
            {
                car.Display();
            }
            Console.WriteLine();
        }

        public void DeleteCar()
        {
            Console.Write("Enter Model to delete: ");
            string model = Console.ReadLine();

            Car car = cars.Find(c => c.Model == model);

            if (car != null)
            {
                cars.Remove(car);
                Console.WriteLine("Car deleted successfully.\n");
            }
            else
            {
                Console.WriteLine("Car not found.\n");
            }
        }
    }

    class Q3
    {
        public static void Run()
        {
            CarCatalog catalog = new CarCatalog();
            int choice;

            do
            {
                Console.WriteLine("---- Car Showroom Menu ----");
                Console.WriteLine("1. Add Car");
                Console.WriteLine("2. Modify Car");
                Console.WriteLine("3. Search Car");
                Console.WriteLine("4. List All Cars");
                Console.WriteLine("5. Delete Car");
                Console.WriteLine("6. Quit");
                Console.Write("Enter your choice: ");

                choice = int.Parse(Console.ReadLine());
                Console.WriteLine();

                switch (choice)
                {
                    case 1:
                        catalog.AddCar();
                        break;
                    case 2:
                        catalog.ModifyCar();
                        break;
                    case 3:
                        catalog.SearchCar();
                        break;
                    case 4:
                        catalog.ListCars();
                        break;
                    case 5:
                        catalog.DeleteCar();
                        break;
                    case 6:
                        Console.WriteLine("Exiting application...");
                        break;
                    default:
                        Console.WriteLine("Invalid choice.\n");
                        break;
                }

            } while (choice != 6);
        }
    }
}
