import CardCart from "../CardCart";

const Cart = ({ currentSale, setCurrentSale }) => {
  const removeProduct = (id) => {
    setCurrentSale(currentSale.filter((product) => product.id !== id));
  };

  const amount = currentSale.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div>
      <h1> Carrinho de compras</h1>
      {currentSale.length > 0 && (
        <div>
          <h3>Valor total: {amount}</h3>
        </div>
      )}

      {currentSale.map((product, index) => (
        <CardCart key={index} product={product} removeProduct={removeProduct} />
      ))}
    </div>
  );
};

export default Cart;
