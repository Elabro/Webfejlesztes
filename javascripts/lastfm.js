// Generated by CoffeeScript 1.4.0
(function() {
  var Lastfm;

  Lastfm = (function() {

    function Lastfm() {}   

    Lastfm.getList = function(query, callback) {
      var url;
      url = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + query + "&api_key=560f5147f60cb7a7df83bb66eacb32f0&format=json";
      return $.ajax({

        dataType: "jsonp",
        context: window,
        data: {
          query: query,
          format: "json"
        },
        type: 'get',
        url: url,
        data: null,
        success: callback,
        crossDomain: true
      });
    };

    Lastfm.getArtist = function(artist, callback) {
      var url;
      url = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artist +"&api_key=560f5147f60cb7a7df83bb66eacb32f0&format=json";
      return $.ajax({

        dataType: "jsonp",
        context: window,
        data: {
          query: artist,
          format: "json"
        },
        type: 'get',
        url: url,
        data: null,
        success: callback,
        crossDomain: true
      });
    };

    return Lastfm;

  })();

  window.Lastfm = Lastfm;

}).call(this);
