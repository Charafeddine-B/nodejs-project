const mongoose = require('mongoose');
const IptvSchema = mongoose.Schema(
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
        poster_path: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        }, 
        genre: {
            type: String,
            required: true,
            trim: true
        }


    }
)
module.exports = mongoose.model('Iptv', IptvSchema)