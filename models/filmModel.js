const mongoose = require('mongoose');


const filmSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            unique: true,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        budget: {
            type: String,
            required: true
        },
        box_office: {
            type: String,
            required: true
        },
        director: {
            type: String,
            required: true
        },
        actors: [{
            type: String,
            required: true
        }],
        released: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        }
    }

)

const Film = mongoose.model('Film', filmSchema)

module.exports = Film;