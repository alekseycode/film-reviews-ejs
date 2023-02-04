const express = require('express');
const router = express.Router();
//require view controller functions
const {
    renderAllFilms,
    renderOneFilm,
    renderCreateFilmForm,
    renderUpdateFilmForm
} = require('../../controllers/view/viewController')

router.get("/", (req, res) => {


    res.render("index");
})

router.get('/allFilms', renderAllFilms)
router.get('/oneFilm/:title', renderOneFilm)
router.get('/createFilm', renderCreateFilmForm)
router.get('/updateFilm/:title', renderUpdateFilmForm)

module.exports = router;