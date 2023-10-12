//Importing External Frameworks
const express = require("express");
const mongoose = require("mongoose");
//Importing Local files
const { PORT } = require ("./config")
require('dotenv').config();
const routes = require("./routes/routes")

const app = express()
app.use(express.json())

app.use("/api", routes)


//Server Connection
const server = app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`)
})
//Database Connection
mongoose.connect(process.env.URI)
    .then(() => console.log("Database connected successfully"))
    .catch((error) => console.error("Something went wrong while connecting to database: " + error))

//Server Error Handling
process.on("unhandledRejection", function (error) {
    console.log(error.name, error.message)
    server.close(function () {
        process.exit(1)
    })
})