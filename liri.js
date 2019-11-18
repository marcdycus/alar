require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var fs = require("fs");
var Spotify = new Spotify(keys.spotify);
var params = process.argv.slice(3).join(" ");

// --------------------------------------------

App = (command, parameters) => {
    switch (command) {
        case "concert-this":
            getMyBand(parameters);
            break;
    
        case "spotify-this":
            getSpotify(parameters);
            break;
    
        case "movie-this":
            getMovie(parameters);
            break;
    
        case "do-what-it-says":
            followFileCommand();
            break;
    
        default:
            console.log("liri doesnt know that command, please try again");
            break;
    }
}

// ---------------------------------------------

getMyBand = artist => {
    var queryUrl = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`;
    
    axios.get(queryUrl).then(response => {
        if (!response.data.length) {
            console.log(`No results found for ${artist}`);
            return;
        }
        for (var i = 0; i < 20; i++) {
            if (response.data[i] != undefined) {
                console.log("-------------------------------------------");
                console.log("Venue: " + response.data[i].venue.name);
                console.log("Venue Location: " + response.data[i].venue.city + ", " + response.data[i].venue.region + ", " + response.data[i].venue.country);
                console.log("Time: " + response.data[i].datetime);
                console.log("Time: " + response.data[i].lineup);
                console.log("-------------------------------------------");
            }
        }

    });
}

getSpotify = lyrics => {
    if (!lyrics) {
        lyrics = "Wannabe";
    };
    Spotify.search({type: 'track', query: lyrics}, function(err, data) {
        if (!err) {
            for (var i = 0; i < 10; i++) {
                if (data.tracks.items[i] != undefined) {
                    console.log("-------------------------------------------")
                    console.log("Artist: " + data.tracks.items[i].artists[0].name);
                    console.log("Song: " + data.tracks.items[i].name);
                    console.log("Album: " + data.tracks.items[i].album.name);
                    console.log("Listen here: " + data.tracks.items[i].preview_url);
                    console.log("-------------------------------------------")
                }
            }
            
        } else {
            console.log("There seems to be an error... " + err);
            return;
        }
        

    });
}

getMovie = title => {
    if (!title) {
        title = "Mr Nobody";
    }
    var queryUrl = `http://omdbapi.com/?t=${title}&apikey=trilogy`;
    axios.get(queryUrl).then(response => {
        if (!response.data) {
            console.log("That is not a real movie. Wah wah wah....");
            return;
        }
        console.log("-------------------------------------------");
        console.log("Title: " + response.data.Title);
        console.log("Release year: " + response.data.Year);
        console.log("Rated: " + response.data.Rated);
        console.log("IMDB: " + response.data.imdbRating);
        console.log("Country: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("-------------------------------------------");
    })
}

function followFileCommand() {
    fs.readFile("random.txt", 'utf8', function(err, data) {
        if (err) {
            console.log(err);
        } else {
            var random = data.split(",");
            App(random[0], random[1]);
        }

    });
}

App(process.argv[2], params);
