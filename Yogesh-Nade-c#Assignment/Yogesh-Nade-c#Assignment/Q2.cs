using System;
using System.Collections.Generic;

namespace Yogesh_Nade_c_Assignment
{
    class Q2
    {
        public static void Run()
        {
            int[] numbers = CreateArray();
            Dictionary<int, double> result = CalculateRoots(numbers);
            PrintDictionary(result);
        }

        static int[] CreateArray()
        {
            Console.Write("Enter number of elements: ");
            int size = int.Parse(Console.ReadLine());

            int[] arr = new int[size];

            Console.WriteLine("Enter numbers:");
            for (int i = 0; i < size; i++)
            {
                arr[i] = int.Parse(Console.ReadLine());
            }

            return arr;
        }

        static Dictionary<int, double> CalculateRoots(int[] arr)
        {
            Dictionary<int, double> dict = new Dictionary<int, double>();

            foreach (int num in arr)
            {
                dict[num] = Math.Sqrt(num);
            }

            return dict;
        }

        static void PrintDictionary(Dictionary<int, double> dict)
        {
            Console.WriteLine("\nNumber\tSquare Root");

            foreach (var item in dict)
            {
                Console.WriteLine($"{item.Key}\t{item.Value}");
            }
        }
    }
}
