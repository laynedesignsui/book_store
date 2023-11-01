//? this web page section highlights books with a 5-star rating, displaying up to four such highly rated books using the Book component

//! COMPONENT IMPORT
import Book from "./ui/Book";
//! CONSTANT IMPORT
import { books } from "../data.js";

const Featured = () => (
  <section id="features">
    <div className="container">
      <div className="row">
        <h2 className="section__title">
          Featured <span className="purple">Books</span>
        </h2>
        <div className="books">
          {books
            .filter((book) => book.rating === 5)
            .slice(0, 4)
            .map((book) => (
              <Book book={book} key={book.id} />
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default Featured;
