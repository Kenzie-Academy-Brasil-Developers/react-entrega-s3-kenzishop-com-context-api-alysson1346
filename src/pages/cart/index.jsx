import HeaderCart from "../../components/headerCart";
import ListaCart from "../../components/listaCart";
import { ProviderCart } from "../../providers/cart";

function Cart() {
  return (
    <>
      <ProviderCart>
        <HeaderCart />
        <ListaCart />
      </ProviderCart>
    </>
  );
}
export default Cart;
