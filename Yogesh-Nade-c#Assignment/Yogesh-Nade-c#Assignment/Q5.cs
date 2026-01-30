using System;

namespace Yogesh_Nade_c_Assignment
{
    class User
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }
        public required string Role { get; set; }
    }

    class Security
    {
        private User[] users;

        public Security()
        {
            users = new User[5]
            {
                new User { UserName="admin", Password="admin123", Role="Administrator" },
                new User { UserName="manager", Password="manager123", Role="Manager" },
                new User { UserName="user1", Password="user123", Role="User" },
                new User { UserName="user2", Password="pass123", Role="User" },
                new User { UserName="guest", Password="guest123", Role="Guest" }
            };
        }

        public bool ValidateUser(User inputUser)
        {
            foreach (User user in users)
            {
                if (user.UserName == inputUser.UserName &&
                    user.Password == inputUser.Password)
                {
                    return true;
                }
            }
            return false;
        }
    }

    class Q5
    {
        public static void Run()
        {
            Console.Write("Enter Username: ");
            string username = Console.ReadLine();

            Console.Write("Enter Password: ");
            string password = Console.ReadLine();

            User loginUser = new User
            {
                UserName = username,
                Password = password,
                Role = ""
            };

            Security security = new Security();
            bool isValid = security.ValidateUser(loginUser);

            if (isValid)
            {
                Console.WriteLine("Login successful");
            }
            else
            {
                Console.WriteLine("Login failed");
            }
        }
    }
}
