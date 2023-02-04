const express = require('express');
const router = express.Router();

//require controller functions
const {
    getAllFilms,
    createFilm,
    getOneFilm,
    updateFilm,
    deleteFilm
} = require('../../controllers/api/filmController')

// set up url routes

router.get('/allFilms', getAllFilms)
router.get('/oneFilm/:title', getOneFilm)

router.post('/createFilm', createFilm)

router.put('/updateFilm/:title', updateFilm)

router.delete('/deleteFilm/:title', deleteFilm)

module.exports = router;