import Header from "../../components/header";
import Lista from "../../components/lista";
import { ProviderCatalogo } from "../../providers/catalogo";
import { ProviderCart } from "../../providers/cart";

const Home = () => {
  return (
    <>
      <ProviderCatalogo>
        <ProviderCart>
          <Header />
          <Lista />
        </ProviderCart>
      </ProviderCatalogo>
    </>
  );
};
export default Home;
