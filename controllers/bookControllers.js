// Get Books
// @route GET/api/books
// @access private

const getBooks = (req,res)=>{

    res.status(200).json({message: 'Get Books'})
}

// Set Book
//@route POST/api/books
// @access private

const setBook = (req,res)=>{
    console.log(req.body)
    
    res.status(200).json({message: 'Set Book'})
}
// Update Books
//@route PUT/api/books/:id
// @access private

const updateBook = (req,res)=>{
    res.status(200).json({message: `Update Book cbk${req.params.id}`})
}
// Delete Book
// @route  DELETE/api/books/:id
// @access private
const deleteBook = (req,res)=>{
    res.status(200).json({message: `Delete Book ${req.params.id}`})
}

module.exports ={
    getBooks,
    setBook,
    updateBook,
    deleteBook
}