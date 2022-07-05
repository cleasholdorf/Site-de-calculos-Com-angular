using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjetoCalculo.Context;
using ProjetoCalculo.Models;
using System.Collections.Generic;

namespace ProjetoCalculo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculoController : ControllerBase
    {
        private readonly CalculoContext _context;
        public CalculoController(CalculoContext context)
        { 
            this._context = context;
        }
        [HttpPost("[action]")]
        public void Add(User Usuario)
        {
            this._context.Users.Add(Usuario);
            this._context.SaveChanges();
        }
        [HttpGet("[action]")]
        public IEnumerable<User> List()
        {
            return this._context.Users;
        }
        [HttpDelete("[action]")]
        public void Delete(int id)
        {

            this._context.Users.Remove(Get(id));
            this._context.SaveChanges();

        }
        [HttpGet("[action]")]
        public User Get(int id)
        {
            return this._context.Users.Find(id);
        }


        

        [HttpGet("[action]")]
        public IEnumerable<Calculo> Listcalculo()
        {
            return this._context.Calculos;
        }
        
       
    }
  
}
