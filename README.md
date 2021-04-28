# book-list-api
The ids are generated randomly and have made an initial 5 items list.

// Get full booklisting
GET request at
https://annas-book-list-api.herokuapp.com/booklist

//Add books to list
POST request at
https://annas-book-list-api.herokuapp.com/booklist/create
JSON:
[
	{
		"title": "title1",
		"author": "author1",
		"read": false
	},
	{
		"title": "title2",
		"author": "author2",
		"read": false
	},
	{
		"title": "title3",
		"author": "author3",
		"read": false
	},
	{
		"title": "title4",
		"author": "author4",
		"read": false
	},
	{
		"title": "title5",
		"author": "author5",
		"read": false
	}
]

//Show book by id
GET request at
https://annas-book-list-api.herokuapp.com/booklist/:id

//Remove book from listing by id
DEL request at
https://annas-book-list-api.herokuapp.com/booklist/:id

//Edit book on the list by id
PUT request at
https://annas-book-list-api.herokuapp.com/booklist/:id
JSON:
{
	"title": "new book title",
	"author": "new author",
	"read": true
}
