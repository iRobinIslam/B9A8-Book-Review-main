
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books,setBooks] = useState([]);

    useEffect(() => {

        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        //console.log(books)
    },[]);
    console.log(books)
    return (
        <div>
            <div className="text-center mt-40 mb-10">
            <h2 className=" text-5xl font-extrabold ">Books</h2>
            </div>
            <div>
                
            </div>
            <div className="grid sm:ml-10 lg:grid-cols-3 md:grid-cols-2 gap-24">
                {
                 books.map(book =><Book key={book.book_id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;