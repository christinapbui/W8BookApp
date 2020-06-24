const mongoose = require("mongoose")

const genreSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: [true,"Name is required!"]
    },
    
},{
    timestamp: true // mongoose provides this; will show when you created this data
})

const Genre = mongoose.model("Genre",genreSchema) // name of our model
module.exports = Genre; // this will make the model