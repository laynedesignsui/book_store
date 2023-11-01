//? this component showcases discounted books on a web page. It filters books with sale prices above 0, displays a maximum of 8, and renders them using the Book component

//! CONSTANT IMPORT
import { books } from "../data";
//! COMPONENT IMPORT
import Book from "./ui/Book";

const Discounted = () => (
  <section id="recent">
    <div className="container">
      <div className="row">
        <h2 className="section__title">
          Discount <span className="purple">Books</span>
        </h2>
        <div className="books">
          {books
            .filter((book) => book.salePrice > 0)
            .slice((book) => (0, 8))
            .map((book) => (
              <Book book={book} key={book.id} />
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default Discounted;
