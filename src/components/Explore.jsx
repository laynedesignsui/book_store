//! REACT IMPORT
import { Link } from "react-router-dom";

const Explore = () => (
  <section id="explore">
    <div className="container">
      <div className="row row__bottom">
        <h2>
          Explore more <span className="purple">Books</span>
        </h2>
        <Link to="/books">
          <button className="btn">Explore Books</button>
        </Link>
      </div>
    </div>
  </section>
);

export default Explore;
