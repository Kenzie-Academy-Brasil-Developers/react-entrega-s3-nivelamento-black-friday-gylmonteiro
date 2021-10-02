import CardProduct from "../CardProduct";

const DisplayProduct = ({
  id,
  discount,
  useProduct,
  setCurrentSale,
  currentSale,
}) => {
  return (
    <div>
      {useProduct
        .filter((product) => product.id === id)
        .map((product, index) => (
          <CardProduct
            key={index}
            product={product}
            setCurrentSale={setCurrentSale}
            currentSale={currentSale}
            discount={discount}
          />
        ))}
    </div>
  );
};

export default DisplayProduct;
