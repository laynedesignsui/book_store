import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faBolt, faShoppingCart, faTimes, faBookOpen, faTags, faStar, faStarHalf, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faShoppingCart, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalf, faArrowLeft)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


