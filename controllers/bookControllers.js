const asyncHandler = require('express-async-handler')

const Book = require('../models/bookModal')


// Get Books
// @route GET/api/books
// @access private

const getBooks = asyncHandler( async(req,res)=>{
const books = await Book.find()

    res.status(200).json(books)
})

// Set Book
//@route POST/api/books
// @access private

const setBook =asyncHandler( async(req,res)=>{
    if(!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
const book = await Book.create({
    text: req.body.text
})
    res.status(200).json()
})
// Update Books
//@route PUT/api/books/:id
// @access private

const updateBook = asyncHandler( async(req,res)=>{
    const book = await Book.findById(req.params.id)
if(!book){
    res.status(400)
    throw new Error('Book not found')

}
   const updateBook = await Book.findByIdAndUpdate(req.params.id, req.
    body,{
        new:true,

    })
    res.status(200).json(updateBook)
})
// Delete Book
// @route  DELETE/api/books/:id
// @access private
const deleteBook =asyncHandler( async(req,res)=>{
    const book = await Book.findById(req.params.id)
    if(!book){
        res.status(400)
        throw new Error('Book not found')
    }
  await book.remove()

    res.status(200).json({ id:req.params.id})
})

module.exports ={
    getBooks,
    setBook,
    updateBook,
    deleteBook
}