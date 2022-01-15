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
        private static readonly string[] Photos = new[]
        {
            "ePmDL2h.png", "H4Yf0Bz.jpg", "QMAy63W.jpg", "n810dXz.png", "hdySpa9.png", "YCH5dbf.png"
        };

        private readonly ILogger<PhotoController> _logger;

        public PhotoController(ILogger<PhotoController> logger) {
            _logger = logger;
        }

        [HttpGet]
        [Route("Api/[controller]")]
        public IEnumerable<Photo> Get() {

            string cs = @"server=localhost;userid=root;password=;database=testdb";
            using var con = new MySqlConnection(cs);
            con.Open();
            var ver = con.ServerVersion;

            return Photos.Select(i => new Photo {                 
                Url = ver
            })
            .ToArray();
        }
    }
}
