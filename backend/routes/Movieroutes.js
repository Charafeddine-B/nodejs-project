
const express = require('express')
const router = express.Router()
const {getMoviebyid, getAllMovies, addMovie, updateMovie, deleteMovie } = require('../controllers/MovieControllers')

router.route('/Movies').get(getAllMovies)
router.route('/Movie/:id').get(getMoviebyid)
router.route('/addMovie').post(addMovie)
router.route('/updateMovie/:id').patch(updateMovie)
router.route('/deleteMovie/:id').delete(deleteMovie)

module.exports = router;












