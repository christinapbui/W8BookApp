const User = require("../models/user")

exports.createUser = async(req,res) => { // this is function name; we export bc we need to use inside app.js // this is middleware
    try {
        // to save the data (in the user file)
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }) // request info from the Body (in Postman)
        // to see if it's done, send response back
        console.log("Success");
        console.log(newUser);
        res.status(201).json({ // send response as JSON
            status: "success",
            data: newUser
        })

    }catch(err){
        res.status(400).json({
            status: "failed",
            message: err.message
        })
    }
}

exports.readUser = async (req,res,next) => {
    try {
        const allUsers = await User.find({})
        res.json({
            status: "success",
            data: allUsers
        })
    }catch(err){
        res.json({
            status: "failed",
            message: err.message
        })
    }
}

exports.updateUser = async (req,res,next) => {
    try {
        const user = await User.findById(req.params.userId) // check to see if we have the user or not
        if(!user){
            throw new Error("There is no user");
            
        }
        const fields = Object.keys(req.body); // get the field from body
        //["name","email"]
        fields.map(field => user[field] = req.body[field]);
        // user["name"] = req.body["name"]
        // user.name = req.body.name

        next();
    }catch (err) {
        res.json({
            status: "failed",
            message: err.message
        })

    }
}