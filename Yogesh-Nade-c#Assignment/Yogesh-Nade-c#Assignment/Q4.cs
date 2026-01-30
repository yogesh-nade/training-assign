using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace Yogesh_Nade_c_Assignment
{
    class Q4
    {
        static string filePath = "cars.json";

        public static void Run()
        {
            List<Car> cars = CreateCarList();

            WriteToFile(cars);

            List<Car> deserializedCars = ReadFromFile();

            PrintCars(deserializedCars);
        }

        static List<Car> CreateCarList()
        {
            return new List<Car>
            {
                new Car { Make="Toyota", Model="Camry", Year=2020, Price=25000 },
                new Car { Make="Honda", Model="City", Year=2019, Price=15000 },
                new Car { Make="Hyundai", Model="Verna", Year=2021, Price=18000 },
                new Car { Make="BMW", Model="X5", Year=2022, Price=60000 },
                new Car { Make="Audi", Model="A4", Year=2021, Price=55000 }
            };
        }

        static void WriteToFile(List<Car> cars)
        {
            string jsonString = JsonSerializer.Serialize(cars);
            File.WriteAllText(filePath, jsonString);
            Console.WriteLine("Cars serialized and written to file.\n");
        }

        static List<Car> ReadFromFile()
        {
            string jsonString = File.ReadAllText(filePath);
            return JsonSerializer.Deserialize<List<Car>>(jsonString);
        }

        static void PrintCars(List<Car> cars)
        {
            Console.WriteLine("Make\tModel\tYear\tPrice");
            foreach (Car car in cars)
            {
                car.Display();
            }
        }
    }
}
