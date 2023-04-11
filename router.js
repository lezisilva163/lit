const express = require('express');
const UserController = require('./controllers/UserController.js');
const FilmController = require('./controllers/FilmController');

const router = express.Router();

router.get("/", function (req, res) {
    res.send("Hello World!");
  });
router.post('/user/create', UserController.create);
router.get('/list/film', FilmController.list);
router.post('/rent/film', FilmController.rent);
router.get('/rented/films', FilmController.rented);

module.exports = router;