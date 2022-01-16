using System;
using System.Collections.Generic;

namespace Portfolio {
    public class Album {

        public int Id { get; set; }

        public string Name { get; set; }

        public int Year { get; set; }

        public IEnumerable<Photo> Photos { get; set; }

    }
}
