//! REACT IMPORT
import ReactDOM from "react-dom/client";
//! COMPONENT IMPORT
import App from "./App";
//! FONT AWESOME IMPORT
import { library } from "@fortawesome/fontawesome-svg-core";
//! ICON IMPORTS
import {
  faBars,
  faBolt,
  faShoppingCart,
  faTimes,
  faBookOpen,
  faTags,
  faStar,
  faStarHalf,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBars,
  faShoppingCart,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalf,
  faArrowLeft
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
