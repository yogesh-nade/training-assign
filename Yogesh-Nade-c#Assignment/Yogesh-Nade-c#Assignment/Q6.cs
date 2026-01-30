using System;

namespace Yogesh_Nade_c_Assignment
{
    class MyClass
    {
        protected string myString;

        public string ContainedString
        {
            set
            {
                myString = value;
            }
        }

        public virtual string GetString()
        {
            return myString;
        }
    }

    class MyDerivedClass : MyClass
    {
        public override string GetString()
        {
            return base.GetString() + " (output from derived class)";
        }
    }

    class Q6
    {
        public static void Run()
        {
            MyDerivedClass obj = new MyDerivedClass();

            obj.ContainedString = "Hello World";

            Console.WriteLine(obj.GetString());
        }
    }
}
