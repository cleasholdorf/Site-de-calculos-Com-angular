using System;
using System.ComponentModel.DataAnnotations;

namespace ProjetoCalculo.Models
{
    public class Calculo
    {
        [Key]
        
        public int Id { get; set; }
        public string Name { get; set; }
        public string Formula { get; set; }
        public string Resultado { get; set; }
    }
}
