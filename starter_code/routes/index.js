const express = require('express');
const router  = express.Router();
const Movie    = require('../models/Movie');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/movies', (req, res, next)=>{
  Movie.find()
  .then((database)=>{
    console.log(database)
    res.render('movies',{moviesList: database})
  })
  .catch((err)=>{
    console.log(err);
    next(err);
  })
})

router.get('/movies/:details/:id', (req, res, next)=>{
  Movie.findById(req.params.id)
  .then((singleMovie)=>{
    console.log(singleMovie)
      res.render('movies/show', {theMovie: singleMovie})
  })
  .catch((err)=>{
      console.log(err);
      next(err);
  })
});

module.exports = router;
