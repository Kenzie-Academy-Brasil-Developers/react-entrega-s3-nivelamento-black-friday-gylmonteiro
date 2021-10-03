const CardCart = ({
  product: { name, id, discount, price },
  removeProduct,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>R${price}</h3>
      <h4>
        Valor com desconto:
        {(price + (price * discount * 0.01 - price)).toFixed(2)}
      </h4>
      <button onClick={() => removeProduct(id)}>Remover do carrinho</button>
    </div>
  );
};

export default CardCart;
