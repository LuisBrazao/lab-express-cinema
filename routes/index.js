const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res) => {  
    Movie.find()
      .then((alltheMoviesFromDB) =>{
          console.log(alltheMoviesFromDB)
        res.render("movies", {movies: alltheMoviesFromDB});
      })
  })

  router.get("/movies/:movieId", (req, res) => {
    let movieId = req.params.movieId;
    Movie.findById(movieId)
      .then(theMovie => res.render('movie-details', { movie: theMovie }))
      .catch(error => res.render("error", {error}))
  })

module.exports = router;
