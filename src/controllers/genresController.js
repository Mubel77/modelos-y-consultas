const db = require ('../database/models');

const genresController = {
    list: function(req, res) {
        db.Genre.findAll() 
            .then(genres => {
                res.render('genresList', { genres: genres });
            })
            .catch (err => {
                    console.log(err)
            })
        },

    detail: function(req, res) {
        const { id } = req.params;
        db.Genre.findByPk(id)
            .then((genre) => {
                res.render('genresDetail', { genre: genre }); 
            })
            .catch(err => {
                    console.log(err)
                })
    },
}
module.exports = genresController