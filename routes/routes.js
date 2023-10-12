const express = require("express");
const router = express.Router()
const Comment = require("../models/model");

//Post Method
router.post('/comments', async (req, res) => {
    const { postSlug, name, commentText } = req.body;
  
    try {
      const newComment = new Comment({
        postSlug,
        comments: [
          {
            name,
            commentText,
          },
        ],
      });
  
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Comment.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Comment.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500)
    }
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send(`Update by ID API ${req.params.id}`)
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send(`Delete by ID API ${req.params.id}`)
})


module.exports = router;