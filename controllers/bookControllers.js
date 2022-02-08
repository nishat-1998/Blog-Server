const asyncHandler = require('express-async-handler')

// Get Books
// @route GET/api/books
// @access private

const getBooks = asyncHandler( async(req,res)=>{

    res.status(200).json({message: 'Get Books'})
})

// Set Book
//@route POST/api/books
// @access private

const setBook =asyncHandler( async(req,res)=>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }

    res.status(200).json({message: 'Set Book'})
})
// Update Books
//@route PUT/api/books/:id
// @access private

const updateBook = asyncHandler( async(req,res)=>{
    res.status(200).json({message: `Update Book cbk${req.params.id}`})
})
// Delete Book
// @route  DELETE/api/books/:id
// @access private
const deleteBook =asyncHandler( async(req,res)=>{
    res.status(200).json({message: `Delete Book ${req.params.id}`})
})

module.exports ={
    getBooks,
    setBook,
    updateBook,
    deleteBook
}