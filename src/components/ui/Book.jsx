//? this component renders book details, including an image, title, rating, and price. It loads the book's image and displays a skeleton loader while the image is loading

//! REACT IMPORTS
import React, { useState, useEffect, useRef } from "react";
//! FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//! ROUTER DOM
import { Link } from "react-router-dom";
//! COMPONENTS
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {

  //? creates useState hook to store an img
  const [img, setImg] = useState();

  //? this line uses the useRef hook to create a mutable reference
  const mountedRef = useRef(true);

  //? used to load an image and set it as the img state variable in a React component
  useEffect(() => {
    // create a loading state
    const image = new Image();
    // start fetching the book cover
    image.src = book.url;
    // once the image is loaded, check if the component is still mounted
    image.onload = () => {
      // set the img state variable if the component is still mounted
      setTimeout(() => {
        if (mountedRef.current) setImg(image);
      }, 1000);
    };
    return () => {
      // cleanup function: Prevent further updates if unmounted
      mountedRef.current = false;
    };
  });

  return (
    <div className="book">
      {img ? (
        <>
          <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
              <img src={img.src} alt="" className="book__img" />
            </figure>
          </Link>
          <div className="book__title">
            <Link to={`/books/${book.id}`} className="book__title--link">
              {book.title}
            </Link>
          </div>
          <Rating rating={book.rating} />
          <Price
            salePrice={book.salePrice}
            originalPrice={book.originalPrice}
          />
        </>
      ) : (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      )}
    </div>
  );
};

export default Book;
