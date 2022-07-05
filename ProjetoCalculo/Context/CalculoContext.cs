using Microsoft.EntityFrameworkCore;
using ProjetoCalculo.Mapping;
using ProjetoCalculo.Models;

namespace ProjetoCalculo.Context
{
    public class CalculoContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Calculo> Calculos { get; set; }
        public CalculoContext(DbContextOptions<CalculoContext> options) 
            :base(options)
        {
             
        }
                      
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
           // modelBuilder.ApplyConfiguration(new UsersMap());
            //base.OnModelCreating(modelBuilder);
        //}
    }
}
