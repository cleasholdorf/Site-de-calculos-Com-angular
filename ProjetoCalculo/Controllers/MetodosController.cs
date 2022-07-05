using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoCalculo.Context;
using ProjetoCalculo.Models;
using System;
using System.Collections.Generic;

namespace ProjetoCalculo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MetodosController : ControllerBase
    {
        private readonly CalculoContext _context;
        public MetodosController(CalculoContext context)
        {
            this._context = context;
        }
        [HttpPost("[action]")]
        public void Addcalculo(Calculo calculo)
        {
            this._context.Calculos.Add(calculo);
            this._context.SaveChanges();
        }
        [HttpGet("[action]")]
        public double Somar(double x, double y)
        {
           Calculo som = new Calculo();
            som.Name = "soma";
            som.Formula = "x+y";
            double Soma = x + y;
            som.Resultado = Convert.ToString(Soma);
            Addcalculo(som);
            return Convert.ToDouble(Soma);
        }
        [HttpGet("[action]")]
        public double Subtracao(double x, double y)
        {
            Calculo resultado = new Calculo();
            resultado.Name = "Subtracao";
            resultado.Formula = "x-y";
            double resultadoSUB = x - y;
            resultado.Resultado = Convert.ToString(resultadoSUB);
            Addcalculo(resultado);
            return Convert.ToDouble(resultadoSUB);

        }
        [HttpGet("[action]")]
        public double Multipicar(double x, double y)
        {
            Calculo resultado = new Calculo();
            resultado.Name = "Multipicar";
            resultado.Formula = "x*y";
            double resultadoSUB = x * y;
            resultado.Resultado = Convert.ToString(resultadoSUB);
            Addcalculo(resultado);
            return Convert.ToDouble(resultadoSUB);
        }
        [HttpGet("[action]")]
        public double Divisao(double x, double y)
        {
            Calculo resultado = new Calculo();
            resultado.Name = "Divisao";
            resultado.Formula = "x/y";
            double resultadoSUB = x / y;
            resultado.Resultado = Convert.ToString(resultadoSUB);
            Addcalculo(resultado);
            return Convert.ToDouble(resultadoSUB);
        }
        [HttpGet("[action]")]
        public double Bascar(double x, double y, double z)
        {
            double resultado = 0;
            
            return resultado;
        }
        [HttpGet("[action]")]
        public double Potencia(double x)
        {
            Calculo resultado = new Calculo();
            resultado.Name = "Potencia";
            resultado.Formula = "x^2";
            double resultado1 = Math.Pow(x, 2);
            resultado.Resultado = Convert.ToString(resultado1);
            Addcalculo(resultado);
                       
            return Convert.ToDouble(resultado1);
        }
        [HttpGet("[action]")] 
        public double Raiz(double x)
        {
            Calculo resultado = new Calculo();
            resultado.Name = "Raiz";
            resultado.Formula = "raisVX";
            double resultado1 = Math.Sqrt(x);
            resultado.Resultado = Convert.ToString(resultado1);
            Addcalculo(resultado);

            return Convert.ToDouble(resultado1);


            
        }


    }
}
