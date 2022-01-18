using System;
using System.Collections.Generic;

namespace Portfolio {
    public class Album {

        public string Name { get; set; }

        public IEnumerable<Photo> Photos { get; set; }

    }
}
