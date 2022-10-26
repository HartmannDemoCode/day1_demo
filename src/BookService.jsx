import React, { useState, useEffect } from 'react';
function BookService() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/books')
            .then((res) => res.json())
            .then(data => {
                setBooks(data);
            });
    },[]);
    return (
        <>
            <BookForm/>
            <table>
                <thead>
                    <tr><th>ID</th><th>TITLE</th><th>AUTHOR</th><th>RATING</th><th>PUBLISHED</th></tr>
                </thead>
                <tbody>

                    {books.length && books.map((book) => {
                        return (
                            <>
                                <tr>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.rating}</td>
                                    <td>{book.year_published}</td>
                                </tr>
                            </>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
const BookForm = () => {
    const [newBook, setNewBook] = useState({});
    const update = (evt) => {
        const value = evt.target.value;
        const propertyName = evt.target.id;
        setNewBook({...newBook,[propertyName]:value});
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(newBook);
        fetch('http://localhost:4000/books', {
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook)
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log(data);
        });
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" id="title" value={newBook.title} onChange={update} />
            <input type="text" id="author" value={newBook.author} onChange={update} />
            <input type="text" id="rating" value={newBook.rating} onChange={update} />
            <input type="text" id="year_published" value={newBook.year_published} onChange={update} />
            <input type="submit" value="Submit"/>
        </form>
        </>
    );
};
export default BookService;