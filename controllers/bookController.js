const Book = require("../models/book")

exports.createBook = async(req,res) => { // this is function name; we export bc we need to use inside app.js // this is middleware
    try {
        // to save the data (in the user file)
        const newBook = await Book.create({
            title: req.body.title,
            author: req.body.author,
            yearPublished: req.body.yearPublished,
            genres: req.body.genres
        }) // request info from the Body (in Postman)
        // to see if it's done, send response back
        console.log("Successfully added a new book");
        console.log(newBook);
        res.status(201).json({ // send response as JSON
            status: "success",
            data: newBook
        })

    }catch(err){
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
}

exports.readBook = async (req,res,next) => {
    try {
        const allBooks = await Book.find({})
        res.json({
            status: "successfully obtained book data",
            data: allBooks
        })
    }catch(err){
        res.json({
            status: "failed to obtain book data",
            message: err.message
        })
    }
}

exports.updateBook = async (req,res,next) => {
    try {
        const book = await Book.findById(req.params.bookId)
        if(!book){
            throw new Error("There is no book");
        }
        fields.map(field => book[field] = req.body[field])
        // book.yearPublished = req.body.yearPublished;
        await book.save();
        res.json({
            status: "successfully updated book",
            data: book
        })
        // next(); // middleware
    }catch (err) {
        res.json({
            status: "failed to update book",
            message: err.message
        })

    }
}

exports.deleteBook = async (req,res,next) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.bookId) 
        if(!book){
            throw new Error("There is no book");
        }
        res.status(204).json({
            status: "successfully deleted book",
            data: null
        })
    }catch (err) {
        res.status(404).json({
            status: "failed to delete book",
            message: err.message
        })

    }
}
