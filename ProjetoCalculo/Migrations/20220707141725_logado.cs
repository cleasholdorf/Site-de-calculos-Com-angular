using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoCalculo.Migrations
{
    public partial class logado : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Estoulogado",
                table: "Users",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Estoulogado",
                table: "Users");
        }
    }
}
