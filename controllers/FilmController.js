const FilmEntity = require("../entities/FilmEntity");
const FilmModel = require("../models/FilmModel");
const axios = require('axios');

class FilmController {
    async rent(req, res) {
        const film = new FilmEntity(FilmModel);

        await film.rent(req.body.filmId, req.body.filmName);

        return res.status(204).json({});
    }

    async list(req, res) {
        const theMovieDbUrl = `https://api.themoviedb.org/3/movie/popular?api_key=8639b309d7d43986f13a230bd0c03720`;

        const filmsData = await axios.get(theMovieDbUrl);
        const films = [];

        filmsData.data.results.forEach(film => {
            films.push({
                id: film.id,
                title: film.original_title,
                overview: film.overview,
                poster_path: film.poster_path,
                page: filmsData.data.page
            });
        });

        return res.status(200).json(films);
    }

    async rented(req, res) {
        const film = new FilmEntity(FilmModel);
        const filmsRented = await film.rented();

        console.log(filmsRented);
        return res.status(200).json(filmsRented);
    }
}

module.exports = new FilmController();