using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProjetoCalculo.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }
        public string Senha { get; set; }
        public List<Calculo> calculos { get; set; }
        public bool Estoulogado { get; set; }
    }
}
