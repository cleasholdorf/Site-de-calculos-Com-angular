using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjetoCalculo.Models;

namespace ProjetoCalculo.Mapping
{
    public class UsersMap :IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.Property(X => X.Id).IsRequired();
            builder.Property(X => X.Name).HasMaxLength(100);
        }
    }
}
