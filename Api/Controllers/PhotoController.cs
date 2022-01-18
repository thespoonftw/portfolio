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
        [Route("Api/locations")]
        public IEnumerable<Location> GetLocations() {

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM locations";
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var results = new List<Location>();
            while (rdr.Read()) {
                results.Add(new Location {
                    Id = rdr.GetInt32(0),
                    Map = rdr.GetInt32(1),
                    X = rdr.GetInt32(2),
                    Y = rdr.GetInt32(3),
                    Name = rdr.GetString(4),
                    Year = rdr.IsDBNull(5) ? "" : rdr.GetString(5)

                });
            }
            return results;
        }

        [HttpGet]
        [Route("Api/holidayLocations")]
        public IEnumerable<Location> GetHolidayLocations() {

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM locations WHERE year > 0";
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var results = new List<Location>();
            while (rdr.Read()) {
                results.Add(new Location {
                    Id = rdr.GetInt32(0),
                    Name = rdr.GetString(4),
                    Year = rdr.IsDBNull(5) ? "" : rdr.GetString(5)

                });
            }
            return results;
        }


        private string GetString(string table, int id, string fieldName) {
            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT " + fieldName + " FROM " + table + " WHERE id=" + id;
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            rdr.Read();
            return rdr.IsDBNull(0) ? "" : rdr.GetString(0);
        }

        [HttpGet]
        [Route("Api/location/{id:int}")]
        public Album GetLocationPhotos(int id) {

            var returner = new Album();
            returner.Name = GetString("locations", id, "name") + " " + GetString("locations", id, "year");

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM photos WHERE locationId=" + id;
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var photos = new List<Photo>();
            while (rdr.Read()) {
                photos.Add(new Photo {
                    Url = rdr.GetString(1),
                });
            }
            returner.Photos = photos;
            return returner;
        }

        [HttpGet]
        [Route("Api/year/{year:int}")]
        public IEnumerable<Photo> GetYearPhotos(int year) {

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM photos WHERE year=" + year;
            using var cmd = new MySqlCommand(sql, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();
            var photos = new List<Photo>();
            while (rdr.Read()) {
                photos.Add(new Photo {
                    Url = rdr.GetString(1),
                });
            }
            return photos;
        }

        /*
        [HttpGet]
        [Route("Api/photos/location/{id:int}")]
        public LocationWithPhotos GetLocationPhotos(int id) {

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

        /*
        [HttpGet]
        [Route("Api/location/{id:int}")]
        public Location GetLocation(int id) {

            Album returner;

            string cs = @"server=localhost;userid=thespoonftw;password=c0c0P0ps;database=portfolio";
            using var con = new MySqlConnection(cs);
            con.Open();
            string sql = "SELECT * FROM locations WHERE id=" + id;
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
        */
    }
}
