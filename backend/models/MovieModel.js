const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        releasedate: {
            type: String,
            required: true,
            trim: true
        },
        /*poster_path: {
            type: String,
            required: true,
            trim: true
        },*/
        cast: {
            type: String,
            required: true,
            trim: true
        },
        duration: {
            type: Number,
            required: true,
            trim: true
        },        
            movie_path: {
            type : String,
            required: true,
            trim: true
        },
 
         
    }
)
module.exports = mongoose.model('Movie', MovieSchema)