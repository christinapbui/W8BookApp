const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({ // schema is data structure
    title: {// need to define data type. this is schema syntax
        type: String,
        required: [true,"Name is required!"]
    },
    author: {
        type: String, 
        required: [true,"Who wrote this damn book!"],
        // trim: true // this means if there's a space in that name, it will cut automatically
    },
    yearPublished: {
        type: Number,
        required: [true,"Year published is required!"],
    },
    genres: [{
        type: Array,
        ref: "Genre",
        required: [true,"Genre is required!"],
        trim: true
    }]
    
    
},{
    timestamp: true // mongoose provides this; will show when you created this data
})

const Book = mongoose.model("Book",bookSchema) // name of our model
module.exports = Book; // this will make the model