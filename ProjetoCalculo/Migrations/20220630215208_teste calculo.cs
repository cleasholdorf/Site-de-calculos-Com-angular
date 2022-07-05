using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjetoCalculo.Migrations
{
    public partial class testecalculo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calculo_Users_UserId",
                table: "Calculo");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Calculo",
                table: "Calculo");

            migrationBuilder.RenameTable(
                name: "Calculo",
                newName: "Calculos");

            migrationBuilder.RenameIndex(
                name: "IX_Calculo_UserId",
                table: "Calculos",
                newName: "IX_Calculos_UserId");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Users",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldMaxLength: 100,
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Calculos",
                table: "Calculos",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Calculos_Users_UserId",
                table: "Calculos",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calculos_Users_UserId",
                table: "Calculos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Calculos",
                table: "Calculos");

            migrationBuilder.RenameTable(
                name: "Calculos",
                newName: "Calculo");

            migrationBuilder.RenameIndex(
                name: "IX_Calculos_UserId",
                table: "Calculo",
                newName: "IX_Calculo_UserId");

            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Users",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Calculo",
                table: "Calculo",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Calculo_Users_UserId",
                table: "Calculo",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
