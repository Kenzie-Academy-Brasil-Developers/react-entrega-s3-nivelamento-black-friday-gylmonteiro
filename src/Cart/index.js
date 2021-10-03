import CardCart from "../CardCart";
import { BsFillBasketFill } from "react-icons/bs";
import { ContainerCard } from "./styles";
const Cart = ({ currentSale, setCurrentSale }) => {
  const removeProduct = (id) => {
    setCurrentSale(currentSale.filter((product) => product.id !== id));
  };

  const amount = currentSale.reduce((acc, item) => {
    return acc + item.itemDiscount;
  }, 0);

  return (
    <div>
      <h1> Carrinho de compras {<BsFillBasketFill />}</h1>
      {currentSale.length > 0 ? (
        <div>
          <h3>Valor total: R$ {amount.toFixed(2)}</h3>
        </div>
      ) : (
        <h3>Sem produtos no momento</h3>
      )}
      <ContainerCard>
        {currentSale.map((product, index) => (
          <CardCart
            key={index}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </ContainerCard>
    </div>
  );
};

export default Cart;
