using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Portfolio.Controllers {
    [ApiController]
    public class PhotoController : ControllerBase {

        private readonly ILogger<PhotoController> _logger;

        public PhotoController(ILogger<PhotoController> logger) {
            _logger = logger;
        }

        [HttpGet]
        [Route("Api/[controller]")]
        public IEnumerable<Photo> Get() {

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT url FROM photos";
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var results = new List<string>();
            while (rdr.Read()) {
                results.Add(rdr.GetString(0));
            }
            return results.Select(i => new Photo {
                Url = i
            });
        }
    }
}
