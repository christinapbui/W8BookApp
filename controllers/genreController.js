const Genre = require("../models/genre")

exports.createGenre = async(req,res) => { // this is function name; we export bc we need to use inside app.js // this is middleware
    try {
        // to save the data (in the user file)
        const newGenre = await Genre.create({
            name: req.body.name,
        }) // request info from the Body (in Postman)
        // to see if it's done, send response back
        console.log("Successfully added a new genre");
        console.log(newGenre);
        res.status(201).json({ // send response as JSON
            status: "success",
            data: newGenre
        })

    }catch(err){
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
}

exports.readGenre = async (req,res,next) => {
    try {
        const allGenres = await Genre.find({})
        res.json({
            status: "successfully obtained genre data",
            data: allGenres
        })
    }catch(err){
        res.json({
            status: "failed to obtain genre data",
            message: err.message
        })
    }
}

exports.deleteGenre = async (req,res,next) => {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.genreId) 
        if(!genre){
            throw new Error("There is no genre");
        }
        res.status(204).json({
            status: "successfully deleted genre",
            data: null
        })
    }catch (err) {
        res.status(404).json({
            status: "failed to delete genre",
            message: err.message
        })

    }
}
