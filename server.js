const mongoose = require('mongoose')
const express = require("express")
const cors = require("cors")
const formRoutes = require("./Routes/formRotes")
const documentsRoutes = require("./Routes/documentRoutes")

const app = express()

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 9000

app.use('/form', formRoutes)
app.use('/documents', documentsRoutes)

mongoose.connect("mongodb+srv://Admin:epKWScsCeLpxOVLN@cluster0.edochot.mongodb.net/Forms?authSource=Forms&authMechanism=SCRAM-SHA-1")

// Create a new blog post object
app.listen(PORT, () => {
  console.log("Connected...")
})

