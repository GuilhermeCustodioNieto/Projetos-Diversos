using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeatherApi.Context;
using WeatherApi.Entities;

namespace WeatherApi.Controllers
{

    [ApiController]
    [Route("contatos")]
    public class ContatoController : ControllerBase
    {
        private readonly AgendaContext _context;
           public ContatoController(AgendaContext context) {
            _context = context;
                }

        [HttpPost]
        public IActionResult Create(Contato contato)
        {
            
            _context.Contatos.Add(contato);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetById), new {id = contato.Id}, contato);
        }

        [HttpGet("/{id}")]
        public IActionResult GetById(int id) {
            var contato = _context.Contatos.Find(id);
            if(contato == null)
            {
                return NotFound();
            }
            return Ok(contato);
        }

        [HttpGet]
        public IActionResult Get()
        {
            var contatos = _context.Contatos;
            return Ok(contatos);
        }

        [HttpGet("/name/{nome}")]
        public IActionResult GetByName(string nome)
        {
            var contatos = _context.Contatos.Where(x => x.Nome.Contains(nome));
            return Ok(contatos);
        }

        [HttpPut("/{id}")]
        public IActionResult Put(Contato contato, int id)
        {
            var contatoBanco = _context.Contatos.Find(id);
            if (contatoBanco == null) {
                return NotFound();
            }

            contatoBanco.Nome = contato.Nome;
            contatoBanco.Ativo = contato.Ativo;
            contatoBanco.Telefone = contato.Telefone;

            _context.Contatos.Update(contatoBanco);
            _context.SaveChanges();
            return Ok(contatoBanco);
        }

        [HttpDelete("/{id}")]
        public IActionResult Delete(int id)
        {
            var contato = _context.Contatos.Find(id);
            if(contato == null)
            {
                return NotFound();
            }

            _context.Contatos.Remove(contato);
            _context.SaveChanges();
            return NoContent();
        }
    }
}