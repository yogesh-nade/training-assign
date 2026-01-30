using System;

namespace Yogesh_Nade_c_Assignment
{
    class Numbers
    {
        public int X { get; set; }
        public int Y { get; set; }

        public Numbers(int x, int y)
        {
            X = x;
            Y = y;
        }
    }

    class Q1
    {
        public static void Run()
        {
            Numbers[] numbersArray =
            {
                new Numbers(2, 3),
                new Numbers(3, 2),
                new Numbers(5, 2),
                new Numbers(4, 3)
            };

            double[] resultArray = CalculatePower(numbersArray);

            Console.WriteLine("Power Results:");
            for (int i = 0; i < resultArray.Length; i++)
            {
                Console.WriteLine($"{numbersArray[i].X}^{numbersArray[i].Y} = {resultArray[i]}");
            }
        }

        static double[] CalculatePower(Numbers[] numbers)
        {
            double[] results = new double[numbers.Length];

            for (int i = 0; i < numbers.Length; i++)
            {
                results[i] = Math.Pow(numbers[i].X, numbers[i].Y);
            }

            return results;
        }
    }
}
