require("dotenv").config();
const keys = require("./keys");
const Spotify = require("node-spotify-api");
const axios = require("axios");
// const moment = require("moment");
// const fs = require("fs");
// const spotify = new Spotify(keys.Spotify);
const params = process.argv.splice(3).join(" ");

// --------------------------------------------


// --------------------------------------------

App = (command, parameters) => {
    switch (command) {
        case "concert-this":
            getMyBand(parameters);
            break;
    
        // case "spotify-this-song":
        //     getSpotify(parameters);
        //     break;
    
        // case "movie-this":
        //     getMovie(parameters);
        //     break;
    
        // case "do-what-it-says":
        //     followFileCommand();
        //     break;
    
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
        }; 
        
        console.log(response.data);

    })
}

App(process.argv[2], params);
