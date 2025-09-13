import React, { useEffect, useState } from 'react';
import BookList from './BookList';

const Navbar = () => {
  const [category, setCategory] = useState("Harry Potter");
  const bookCategories = [
    "Fiction", "Nonfiction", "Fantasy", "Romance", "Mystery", "Thriller",
    "Science Fiction", "Historical Fiction", "Biography", "Autobiography",
    "Self Help", "Motivational", "Business", "Finance", "Technology",
    "Science", "History", "Philosophy", "Psychology", "Poetry",
    "Drama", "Young Adult", "Children"
  ];

  const [books, setBooks] = useState([]);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${category}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    };
    fetchBooks();
  }, [category]);

  const filteredItems = books.filter((book) =>{
    const titleMatch= book.volumeInfo.title?.toLowerCase().includes(inputVal.toLowerCase());
  const authorMatch= book.volumeInfo.author?.toLowerCase().includes(inputVal.toLowerCase());

  return titleMatch || authorMatch;
  }
  );

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3"
     style={{position:"fixed",display:"flex",justifyContent:"space-between",width:"100%",marginTop:"-100px"}}
>

        <a className="navbar-brand text-warning" style={{ fontWeight: "700", fontSize: "35px" }} href="#">MyBooks</a>

        <div className="dropdown mx-2">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Category: {category}
          </button>
          <ul className="dropdown-menu">
            {bookCategories.map((categ, idx) => (
              <li key={idx}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => { e.preventDefault();
                     setCategory(categ); }}
                >
                  {categ}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="inputBox" style={{ textAlign: "center", marginTop: "100px",paddingTop:"30px" }}>
        <input
          placeholder="Search for a book..."
          style={{width: "300px", padding: "13px", fontSize: "20px" }}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((book, idx) => (
            <BookList
              key={idx}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors?.join(", ")}
              pubDate={book.volumeInfo.publishedDate}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks?.thumbnail}
            />
          ))
        ) : (
          <h4 className="text-center">
            No books found for "{inputVal || category}"...
          </h4>
        )}
      </div>
    </div>
  );
};

export default Navbar;
