const createError = require('http-errors')

let booklist = [];
let idgen = () => {
    return Math.random().toString(36).substr(2, 5);
}
let cnt = 0;

// Get full booklisting
exports.index = (req, res) => {
    res.send(booklist)
}

//Add books to list
exports.create = (req, res, next) => {
    if (!req.body[cnt].title) {
        return (next(createError(400, "title is required")))
    }
    booklist.push({
        id: idgen(),
        title: req.body[cnt].title,
        author: req.body[cnt].author,
        read: req.body[cnt].read,
        cnt: cnt
    })
    res.send({ result: true })
    cnt++
}

//Show book by id
exports.show = (req, res, next) => {
    const bookListItem = booklist.find((value) => value.id == req.params.id)
    if(!bookListItem) {
        return(next(createError(404, "no book with that id")))
    }
    res.send(bookListItem)
}

//Remove book from listing by id
exports.delete = (req, res, next) => {
    const bookListItem = booklist.find((value) => value.id == req.params.id)
    if(!bookListItem) {
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.filter((value) => value.id != req.params.id)
    res.send({ result: true })
}

//Edit book on the list by id
exports.update = (req, res, next) => {
    const bookListItem = booklist.find((value) => value.id == req.params.id)
    if (!req.body.title) {
        return (next(createError(400, "title is required")))
    }
    if(!bookListItem) {
        return(next(createError(404, "no book with that id")))
    }
    booklist = booklist.map((value) => {
        if (value.id == req.params.id){
            value.title = req.body.title
            value.author = req.body.author
            value.read = req.body.read
        }
        return value
    })
    res.send ({result: true})
}