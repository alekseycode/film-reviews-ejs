const Film = require('../../models/filmModel')

async function getAllFilms(req, res) {
    try {
       let result = await Film.find({})

        res.json({ message: "Successfully retrieved all films", payload: result})

    } catch (err) {
        console.log('error in getAllFilms: ' + err);

        res.json({message: 'Failure', payload: err})
    }
}

async function createFilm(req, res) {
    try {
        let userInput = {
            title: req.body.title,
            rating: req.body.rating,
            budget: req.body.budget,
            box_office: req.body.box_office,
            director: req.body.director,
            actors: req.body.actors.split(', '),
            released: req.body.released,
            duration: req.body.duration,
            genre: req.body.genre
        }
        await Film.create(userInput)
        
        res.redirect(`/oneFilm/${userInput.title}`)
        // res.json({message: "Successfully added " + req.body.title, payload: result})
    } catch (err) {

        console.log(req.body); 
        console.log('Error in createFilm() ' + err);
        res.json({message: 'Failure', payload: err})
        
    }
}

async function getOneFilm(req, res) {
    try {
        let target = req.params.title;
        let result = await Film.find({ title: target });
        res.json({message: 'Successfully retrieved film', payload: result})
    } catch (err) {
        console.log('Error in getOneFilm(): ' + err);
        res.json({ message: 'Failure', payload: err})
    }
   
}

async function updateFilm(req, res) {
    try {
        let userInput = {
            title: req.body.title,
            rating: req.body.rating,
            budget: req.body.budget,
            box_office: req.body.box_office,
            director: req.body.director,
            actors: req.body.actors.split(', '),
            released: req.body.released,
            duration: req.body.duration,
            genre: req.body.genre
        }

         await Film.updateOne(
            { title: req.params.title }, 
            { $set: userInput },
            {upsert: true}
        )
        // res.json({message: 'Successfully updated ' + req.body.title, payload: req.body} )
        res.redirect('/oneFilm/' + req.params.title)
    } catch (err) {
        console.log('Error in updateFilm(): ' + err);
        res.json({message: 'Failure', payload: err })
        
    }
}

async function deleteFilm(req, res) {
    try {
        let result = await Film.deleteOne({ title: req.params.title })
        // res.json({message: 'Successfully deleted ' + req.params.title, payload: result})
        res.redirect('/allFilms')
    } catch (err) {
        console.log('Error in deleteFilm(): ' + err);
        res.json({message: 'Failure', payload: err})
    }
}

module.exports = {
    getAllFilms,
    createFilm,
    getOneFilm,
    updateFilm,
    deleteFilm
}

