using System;
using System.Collections.Generic;

namespace Yogesh_Nade_c_Assignment
{
    class Location
    {
        public string PlaceName { get; set; }
        public string Elevation { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }
        public string WeatherType { get; set; }

        public void Display()
        {
            Console.WriteLine("Elevation   : " + Elevation);
            Console.WriteLine("Longitude   : " + Longitude);
            Console.WriteLine("Latitude    : " + Latitude);
            Console.WriteLine("WeatherType : " + WeatherType);
        }
    }

    class Q8
    {
        public static void Run()
        {
            List<Location> locations = new List<Location>
            {
                new Location { PlaceName="Delhi", Elevation="216m", Longitude=77.1025, Latitude=28.7041, WeatherType="Hot" },
                new Location { PlaceName="Mumbai", Elevation="14m", Longitude=72.8777, Latitude=19.0760, WeatherType="Humid" },
                new Location { PlaceName="Shimla", Elevation="2206m", Longitude=77.1734, Latitude=31.1048, WeatherType="Cold" },
                new Location { PlaceName="Chennai", Elevation="6m", Longitude=80.2707, Latitude=13.0827, WeatherType="Hot" }
            };

            Console.Write("Enter Place Name: ");
            string input = Console.ReadLine();

            Location found = null;
            foreach (Location loc in locations)
            {
                if (loc.PlaceName.Equals(input, StringComparison.OrdinalIgnoreCase))
                {
                    found = loc;
                    break;
                }
            }

            if (found != null)
            {
                Console.WriteLine("\nLocation Details:");
                found.Display();
            }
            else
            {
                Console.WriteLine("Not Found Message");
            }
        }
    }
}
