import { useContext } from "react";
import { ContextCatalogo } from "../../providers/catalogo";
import { ContextCart } from "../../providers/cart";

const Lista = () => {
  const { catalogo } = useContext(ContextCatalogo);
  const { addCart } = useContext(ContextCart);

  return (
    <ul className="listaProducts">
      {catalogo.map((elem) => {
        return (
          <li className="cardProducts" key={elem.id}>
            <img className="imgList" src={elem.image} />
            <h2 className="titleList">{elem.title}</h2>
            <p className="descriptionList">{elem.description}</p>
            <p className="picelist">R${elem.price}</p>
            <div>
              <button onClick={() => addCart(elem)} className="btnList">
                Add carrinho
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Lista;
