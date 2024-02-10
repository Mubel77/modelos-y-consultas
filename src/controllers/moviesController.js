const db = require ('../database/models')

const moviesController = {
    list: function(req, res) {
        db.Movie.findAll()
            .then(movies => {
                res.render('movieslist', { movies: movies });
            })
            .catch (err => {
                console.log(err)
            })
        },

    new: function(req, res) {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ]
        })
            .then((movies) => {
                res.render('newestMovies',{ movies : movies})
            })
            .catch(err => {
                console.log(err)
            })
        },

    recomended: function(req, res) {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit:5
        })
        .then((movies)=> {
            res.render('recommendedMovies', { movies : movies})
        })
        .catch(err => {
            console.log(err)
        })
        },

    detail: function(req, res) {
        const { id } = req.params;
        db.Movie.findByPk(id)
        .then((movie) => {
         res.render('moviesDetail', { movie: movie });
             })
             .catch(err => {
                console.log(err)
            })
        },

}

module.exports = moviesController