import { useState } from "react";
import DisplayProduct from "../DisplayProduct";

const ButtonDiscount = ({ setCurrentSale, useProduct, currentSale }) => {
  const [id, setId] = useState(0);
  const [discount, SetDiscount] = useState(0);

  const handleDiscount = () => {
    const idRandom = Math.floor(Math.random() * 6 + 1);
    setId(idRandom);
    const discountRound = Math.floor(Math.random() * 6 + 4);
    SetDiscount(discountRound * 10);
  };

  return (
    <div>
      <button onClick={handleDiscount}>Gerar Promoção</button>
      <DisplayProduct
        id={id}
        discount={discount}
        useProduct={useProduct}
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
      ></DisplayProduct>
    </div>
  );
};

export default ButtonDiscount;
