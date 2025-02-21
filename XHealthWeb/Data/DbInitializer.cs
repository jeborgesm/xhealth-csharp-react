using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using XHealthWeb.Models;

namespace XHealthWeb.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ApplicationDbContext context)
        {
            context.Database.EnsureCreated();

            // Check if there are any Clients
            if (context.Clients.Any())
            {
                return;   // DB has been seeded
            }

            // Add seed data here
            var clients = new Client[]
            {
                    new Client{ Name="Client1", Phone="111-111-1111", Email="je@je.com", Accounts = new List<Account>() },
                    new Client{ Name="Client2", Phone="111-111-1111", Email="je@je.com", Accounts = new List<Account>() }
            };

            foreach (Client c in clients)
            {
                context.Clients.Add(c);
            }
            context.SaveChanges();
        }
    }
}
