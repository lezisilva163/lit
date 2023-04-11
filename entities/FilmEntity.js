const Op = require('sequelize');

class FilmEntity {
    constructor(filmModel) {
        this.filmModel = filmModel
    }

    async rent(filmId, filmName){
        return await this.filmModel.create({
            the_movie_db_film_id : filmId,
            name: filmName
        });
    };

    async rented() {
        const currentDate = new Date();
        console.log(new Date(currentDate.setDate(currentDate.getDate() - 2)).toISOString().replace(/T/, ' ').replace(/\..+/, ''));
        return await this.filmModel.findAll({
            attributes: ['the_movie_db_film_id'],
            where: {
                createdAt: {
                    [Op.gte]: new Date(currentDate.setDate(currentDate.getDate() - 2)).toISOString().replace(/T/, ' ').replace(/\..+/, '')
                }
            }
        });
    }
}

module.exports = FilmEntity;