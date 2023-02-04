const express = require('express');
const app = express();
const path = require('path');
const connectToMongoDB = require("./database/mongodb.js");
const methodOverride = require('method-override');

//set ejs view engine
app.set("view engine", "ejs");
//set views folder to render ejs
app.set("views", path.join(__dirname, "views"));

//let client read json data
app.use(express.json())

//parse URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));

//serve static files (html, css, JS)
app.use(express.static(path.join(__dirname, "public")));

//override basic form methods
app.use(methodOverride('_method'));

//require routes
const viewsRouter = require('./routes/viewRouters/viewRouter');
const filmRouter = require('./routes/api/filmRouter')

//set url routes to use router files
app.use("/", viewsRouter)
app.use('/api', filmRouter)

app.listen(3000, () => {
    console.log("Server up on 3000");

    connectToMongoDB();
})