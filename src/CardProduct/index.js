const CardProduct = ({ product, setCurrentSale, currentSale, discount }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>R${product.price.toFixed(2)}</p>
      <p>
        Desconto = {discount}% -- R$
        {(-1 * (product.price * discount * 0.01 - product.price)).toFixed(2)}
      </p>
      <p>
        Valor com o desconto = R$
        {(
          product.price +
          (product.price * discount * 0.01 - product.price)
        ).toFixed(2)}
      </p>
      <button
        onClick={() =>
          setCurrentSale([
            ...currentSale,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              discount: discount,
            },
          ])
        }
      >
        Adicionar item
      </button>
    </div>
  );
};

export default CardProduct;
