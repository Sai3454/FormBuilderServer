const express = require("express")
const documents = require("../Models/submissionDocuments")
const router = express.Router()

router.get('/', async(req, res) => {
    const data = await documents.find()
    res.send(data)
})

router.post('/', async(req, res) => {
    const data = new documents({
        id: req.body.id,
        formId: req.body.formId,
        answers: req.body.answers
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