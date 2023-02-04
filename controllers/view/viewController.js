const Film = require('../../models/filmModel')

async function renderAllFilms(req, res) {
    try {
         let result = await Film.find({});

         res.render('allFilms', {film: result})
    } catch (err) {
        console.log('Error in renderAllFilms(): ' + err);
    }
   
}

async function renderOneFilm(req, res) {
    try {
        let result = await Film.find({ title: req.params.title })
        
        res.render('oneFilm', {film: result[0]})
    } catch (err) {
        console.log('Error in renderOneFilm(): ' + err);
        
    }
}

async function renderCreateFilmForm(req, res) {
    try {
        res.render('createFilm')
    } catch (err) {
        console.log('Error in renderCreateFilmForm(): ' + err);
        
    }
}

async function renderUpdateFilmForm(req, res) {
    try {
        let result = await Film.find({title: req.params.title})

        res.render('updateFilm', {film: result[0]})
    } catch (err) {
        console.log('Error in renderUpdateFilmForm(): ' + err);
    }
}

module.exports = {
    renderAllFilms,
    renderOneFilm,
    renderCreateFilmForm,
    renderUpdateFilmForm
}