const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const bodyParser = require('body-parser')
const {createUser, readUser, updateUser} = require("./controllers/userController")
const {createBook, readBook, updateBook, deleteBook} = require("./controllers/bookController")
const {createGenre, readGenre, deleteGenre} = require("./controllers/genreController")
const express = require("express")

// will connect to mongoDB
mongoose.connect(process.env.DB_LOCAL, { // will bring database address from .env file
    useCreateIndex: true, 
    useNewUrlParser: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true 
    })
.then(()=> console.log("connected to database"))

const app = express();
const router = express.Router();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// use router
app.use(router);

router
.route("/")
.post(createUser)
.get(readUser)

router
.route("/user/:userId")
.put(updateUser)

router
.route("/books")
.post(createBook)
.get(readBook)

router
.route("/books/:bookId")
.put(updateBook)
.delete(deleteBook)

router
.route("/genres")
.post(createGenre)
.get(readGenre)

router
.route("/genres/:genreId")
// .put(updateGenre)
.delete(deleteGenre)


app.listen(process.env.PORT, () => 
    console.log("server running on " + process.env.PORT)
);

    

