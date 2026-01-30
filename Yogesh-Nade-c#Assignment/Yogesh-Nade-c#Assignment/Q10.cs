using System;
using System.Collections.Generic;

namespace Yogesh_Nade_c_Assignment
{
    class Q10
    {
        public static void Run()
        {
            List<int> numbers = new List<int> { 5, 2, 7, 5, 9, 5, 2, 7, 5 };

            Console.Write("Enter number to search: ");
            int searchNumber = int.Parse(Console.ReadLine());

            int count = 0;
            int index = numbers.IndexOf(searchNumber);

            Console.WriteLine("\nIndex positions:");

            while (index != -1)
            {
                Console.WriteLine(index);
                count++;
                index = numbers.IndexOf(searchNumber, index + 1);
            }

            if (count > 0)
            {
                Console.WriteLine($"\nNumber {searchNumber} appears {count} times.");
            }
            else
            {
                Console.WriteLine("\nNumber not found in the list.");
            }
        }
    }
}
