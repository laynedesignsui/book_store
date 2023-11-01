//? this component displays book or product ratings using star icons. It takes a rating prop and represents it visually with full stars for the integer part and a half star for a fractional part

//! FONT AWESOME IMPORT
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => (
  <>
    {
      <div className="book__ratings">
        {new Array(Math.floor(rating)).fill(0).map((_, index) => (
          <FontAwesomeIcon icon="star" key={index} />
        ))}
        {!Number.isInteger(rating) && <FontAwesomeIcon icon="star-half" />}
      </div>
    }
  </>
);

export default Rating;
