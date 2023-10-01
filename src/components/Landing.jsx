import React from "react"
import undraw_books from "../assets/Undraw_Books.svg"

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Canada's most awarded online Library platform</h1>
            <h2>
              Find your dream book with <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse Books</button>
            </a>
            <figure className="header__img--wrapper">
                <img src={undraw_books} alt="" />
            </figure>
          </div>
        </div>
      </header>
    </section>
  )
}

export default Landing
