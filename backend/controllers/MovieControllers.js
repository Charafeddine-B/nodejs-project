
let Movie = require('../models/MovieModel')

exports.getAllMovies = async (req, res) => {
    const Movies = await Movie.find()
    res.status(200).json({
        code: 200,
        success: true,
        message: 'affichage de tous les Movies',
        count: Movies.length,
        Movies

    })  
} 
//----------ajout
exports.addMovie = async (req, res) => {
    const movie = new Movie(req.body)
    await movie.save()
    res.status(200).json({
        code: 200,
        success: true,
        message: 'Movie a été ajouté',
        movie
    })
}


exports.getMoviebyid = async (req, res) => {

    const movie = await Movie.findOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        message: "affichage d'une seule movie par id",
        movie
    })

}

//-----------update--------------------------------
exports.updateMovie = async (req, res) => {
    const update_Movie = await Movie.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.status(200).json({
        success: true,
        message: 'Movie a été modifié',
        update_Movie
    })
}

//--------deleteMovie

exports.deleteMovie = async (req, res) => {
    const delete_Movie = await Movie.deleteOne({
        _id: req.params.id
    })
    res.status(200).json({
        success: true,
        message: 'Movie a été supprimé',
        delete_Movie
    })
}
exports.watchMovie = async (req, res) => {
const Movie = this.getMoviebyid(req,res); //get Movie we want to watch
    // Create video element
const video = document.createElement('video');

// Use local file
// video.src = 'video.mp4';
 
// Use remote file
const paths = Movie.findOne({Movie_path:req.params.Movie_path}); 
video.src = paths;
video.controls = true;
video.muted = false;


const box = document.getElementById('box');
// Include in HTML as child of #box
box.appendChild(video);
    res.status(200).json({
        code: 200,
        success: true,
        message: 'Movie a été ajouté',
        movie
    })
}

