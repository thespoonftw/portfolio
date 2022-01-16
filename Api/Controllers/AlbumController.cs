using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Portfolio.Controllers {
    [ApiController]
    public class AlbumController : ControllerBase {
        
        private readonly ILogger<AlbumController> _logger;

        public AlbumController(ILogger<AlbumController> logger) {
            _logger = logger;
        }

        [HttpGet]
        [Route("Api/[controller]")]
        public IEnumerable<Album> Get() {

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM albums";
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var albums = new List<Album>();
            while (rdr.Read()) {
                albums.Add(new Album() { Id = rdr.GetInt32(0), Name = rdr.GetString(1), Year = rdr.GetInt32(2) });
            }
            return albums.OrderByDescending(a => a.Year);
        }

        [HttpGet]
        [Route("Api/album/{id:int}")]
        public Album Get(int id) {

            Album returner;

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM albums WHERE id=" + id;
            using var cmd = new MySqlCommand(sql, con);
            using (MySqlDataReader rdr = cmd.ExecuteReader()) {
                rdr.Read();
                returner = new Album() { Id = rdr.GetInt32(0), Name = rdr.GetString(1), Year = rdr.GetInt32(2) };
            }
                
            string sql2 = "SELECT url FROM photos WHERE albumId=" + id;
            using var cmd2 = new MySqlCommand(sql2, con);
            using (MySqlDataReader rdr = cmd2.ExecuteReader()) {
                var photos = new List<Photo>();
                while (rdr.Read()) {
                    photos.Add(new Photo() { Url = rdr.GetString(0) });
                }
                returner.Photos = photos;
            }

            return returner;
        }
    }
}
