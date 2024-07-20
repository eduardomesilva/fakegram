require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT

const app = express()

// config json and form data
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

// cors
app.use(cors({credentials: true, origin: "htpp://localhost:3000"}))

// upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

// db conection
require("./config/db.js")

//rotas
const router = require("./routes/Router.js")
app.use(router)


app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})