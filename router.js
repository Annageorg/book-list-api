const express = require('express')
const router = express.Router()
const booklist = require('./bookListController')

// Get full booklisting
router.get('/booklist', booklist.index)
//Add books to list
router.post('/booklist/create', booklist.create)
//Show book by id
router.get('/booklist/:id', booklist.show)
//Remove book from listing by id
router.delete('/booklist/:id', booklist.delete)
//Edit book on the list by id
router.put('/booklist/:id', booklist.update)

module.exports = router