import React, { useState, useEffect } from 'react';
function BookService() {
    const [books, setBooks] = useState([]);
    const [booksChanged, setBooksChanged] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:4000/books');
            const data = await response.json();
            setBooks(data);
        })();
    }, [booksChanged]);
    return (
        <>
            <BookForm isChanged={setBooksChanged} />
            {books.length && <table>
                <thead>
                    <tr><th>ID</th><th>TITLE</th><th>AUTHOR</th><th>RATING</th><th>PUBLISHED</th></tr>
                </thead>
                <tbody>{books.map((book) => {
                        return (<tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.rating}</td>
                            <td>{book.year_published}</td>
                            </tr>);
                    })}</tbody>
            </table>}
        </>
    );
}
const BookForm = (props) => {
    const [newBook, setNewBook] = useState({});
    const update = (evt) => {
        const value = evt.target.value;
        const propertyName = evt.target.id;
        setNewBook({ ...newBook, [propertyName]: value });
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
            .then((res) => res.json())
            .then((data) => {
                console.log('DATA:', data);
                props.isChanged(true);
            });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id="title" value={newBook.title} onChange={update} />
                <input type="text" id="author" value={newBook.author} onChange={update} />
                <input type="text" id="rating" value={newBook.rating} onChange={update} />
                <input type="text" id="year_published" value={newBook.year_published} onChange={update} />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};
export default BookService;