# Book list API

The ids are generated randomly and one JSON object is expected each time. See below the endpoints and the deployed app-link in Heroku to use in Insomnia.

### 1. Get full booklisting
**GET** request at
https://annas-book-list-api.herokuapp.com/booklist

### 2. Add books to list
**POST** request at
https://annas-book-list-api.herokuapp.com/booklist/create
##### JSON:
```

	{
		"title": "title1",
		"author": "author1",
		"read": false
	}
	
```

### 3. Show book by id
**GET** request at
https://annas-book-list-api.herokuapp.com/booklist/:id

### 4. Remove book from listing by id
**DEL** request at
https://annas-book-list-api.herokuapp.com/booklist/:id

### 5. Edit book on the list by id
**PUT** request at
https://annas-book-list-api.herokuapp.com/booklist/:id
##### JSON:
```
{
	"title": "new book title",
	"author": "new author",
	"read": true
}
```
