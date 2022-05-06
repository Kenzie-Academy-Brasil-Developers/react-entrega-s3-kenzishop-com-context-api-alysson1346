import { useContext } from "react";
import { useEffect } from "react";
import { ContextCart } from "../../providers/cart";

function ListaCart() {
  const { cart, removeCart, limparCart, setCart } = useContext(ContextCart);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("@cart")) || []);
  }, [cart]);

  return (
    <ul className="cartListaProducts">
      {cart.map((elem, i) => {
        return (
          <li className="cardProductsCart" key={elem.id}>
            <img className="cartImage" src={elem.image} />
            <h2 className="titleList">{elem.title}</h2>
            <p className="descriptionList">{elem.description}</p>
            <p className="picelist">R${elem.price}</p>
            <button className="btnListCart" onClick={() => removeCart(elem)}>
              Remover
            </button>
          </li>
        );
      })}
      <div className="totalCart">
        <p>
          Total do Carrinho: R$
          {cart
            .reduce((acc, cv) => {
              const result = acc + cv.price;
              return result;
            }, 0)
            .toFixed(2)
            .replace(".", ",")}
        </p>
        <button onClick={() => limparCart()} className="btnListCart">
          Limpar
        </button>
      </div>
    </ul>
  );
}
export default ListaCart;
