import { useState, createContext } from "react";
import listaProducts from "../services/api";

export const ContextCatalogo = createContext([]);

export const ProviderCatalogo = ({ children }) => {
  const [catalogo, setCatalago] = useState(listaProducts);

  return (
    <ContextCatalogo.Provider value={{ catalogo }}>
      {children}
    </ContextCatalogo.Provider>
  );
};
