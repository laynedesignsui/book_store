//? this component renders book prices, taking salePrice and originalPrice props. It formats and displays them, with a strikethrough for the original price if a sale is present

const Price = ({ salePrice, originalPrice }) => (
  <>
    <div className="book__price">
      {salePrice ? (
        <>
          <span className="book__price--normal">
            ${originalPrice.toFixed(2)}
          </span>
          ${salePrice.toFixed(2)}
        </>
      ) : (
        <>${originalPrice.toFixed(2)}</>
      )}
    </div>
  </>
);

export default Price;
