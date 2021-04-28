const express = require('express')
const router = express.Router()
const booklist = require('./bookListController')

/* GET home page*/
router.get('/booklist', booklist.index)
router.post('/booklist/create', booklist.create)
router.get('/booklist/:id', booklist.show)
router.delete('/booklist/:id', booklist.delete)
router.put('/booklist/:id', booklist.update)

module.exports = router