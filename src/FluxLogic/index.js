import { useState } from "react";
import ButtonDiscount from "../ButtonDiscount";
import Cart from "../Cart";

const FluxLogic = () => {
  const [useProduct, setProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [currentSale, setCurrentSale] = useState([]);

  console.log(currentSale);

  return (
    <div>
      <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
      <ButtonDiscount
        setProduct={setProduct}
        setCurrentSale={setCurrentSale}
        useProduct={useProduct}
        currentSale={currentSale}
      />
    </div>
  );
};

export default FluxLogic;
