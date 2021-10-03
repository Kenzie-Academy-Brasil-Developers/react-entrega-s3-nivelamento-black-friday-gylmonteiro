import { Button } from "@material-ui/core";
import { ContainerCardCart } from "./styles";

const CardCart = ({
  product: { name, id, discount, price },
  removeProduct,
}) => {
  return (
    <ContainerCardCart>
      <h2>{name}</h2>
      <h3>R${price}</h3>
      <h4>
        Valor com desconto: R$
        {(price - price * (discount * 0.01)).toFixed(2)}
      </h4>
      <Button
        variant="outlined"
        size="small"
        color="primary"
        onClick={() => removeProduct(id)}
      >
        Remover do carrinho
      </Button>
    </ContainerCardCart>
  );
};

export default CardCart;
