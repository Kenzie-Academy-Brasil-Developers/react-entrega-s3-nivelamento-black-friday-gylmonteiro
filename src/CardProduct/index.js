import { Button } from "@material-ui/core";
import { ContainerProductDiscount } from "./styles";
const CardProduct = ({ product, setCurrentSale, currentSale, discount }) => {
  const itemDiscount = Number(
    (product.price - product.price * (discount * 0.01)).toFixed(2)
  );

  return (
    <ContainerProductDiscount>
      <h1>{product.name}</h1>
      <p>R$ {product.price.toFixed(2)}</p>
      <p>Desconto de {discount}% </p>
      <p>
        Valor com o desconto = R$
        {(product.price - product.price * (discount * 0.01)).toFixed(2)}
      </p>
      <Button
        color="secondary"
        variant="contained"
        size="medium"
        onClick={() =>
          setCurrentSale([
            ...currentSale,
            {
              id: product.id,
              name: product.name,
              price: product.price,
              discount: discount,
              itemDiscount: itemDiscount,
            },
          ])
        }
      >
        Adicionar item
      </Button>
    </ContainerProductDiscount>
  );
};

export default CardProduct;
