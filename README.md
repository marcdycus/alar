# LIRI APP
**Terminal app that allows you to get 3 types of info.**

1) Concerts and concert locations for your choice of artist
2) Name of Artists who sing a song of your choice
3) Movie information about a movie of your choice

By typing one of the following commands **after typing "node liri.js**, it will give you the information listed above, respectively:

A) `concert-this` + (name of band),

B) `spotify-this` + (name of song),

C) `movie-this` + (name of movie)

And lastly: 

D) `do-what-it-says`

This will actually read a text file and literally do what it says on that text file, which is one of the previous three.


# The way it works

Open the app in terminal and begin by typing "node liri.js" and (one of the 4 options) and (your inquiry)

`concert-this` should look something like this:

![concert gify](https://media.giphy.com/media/VhjGBIpynXro6XwVcC/giphy.gif)


`spotify-this` should look something like this:

![spotify gify](https://media.giphy.com/media/MF7VbjeIrJXpSplLYY/giphy.gif)


`movie-this` should look something like this:

![movie gify](https://media.giphy.com/media/STxaWXQEIx0zdqvKFz/giphy.gif)


**Behind The Scenes**

It works by reaching out to a specific API, whether it be bandsInTown, spotify, or omdb.
The first thing you type (`node`) is a platform that allows you to run javascript outside of a window.
The second thing you type (`liri.js`) is the application you want to run.
The third thing (`concert-this`, `spotify-this`, `movie this`, or `do-what-it-says`) is the function that you are calling in order to make the call to the API.
And the last thing you type (your choice of inquiry) is essentially your "google search". The function tells the program which kind of database you want to use, and brings back information to the inquirer the results.
By limiting and organizing the returned information into a specific object keys, the user can easily read the information.