const express = require("express")
const Form = require("../Models/form")
const router = express.Router()

router.get('/', async(req, res) => {
    const data = await Form.find()
    res.send(data)
})

router.post('/', async(req, res) => {
    const data = new Form({
        title: "SK Form",
        questions: req.body.questions
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = router