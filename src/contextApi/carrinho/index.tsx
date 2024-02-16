import { ReactElement, createContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";

export interface ICarrinhoContext {
  carrinho?: ICarrinho
}

export const CarrinhoContext = createContext<ICarrinhoContext>({});

interface CarrinhoProviderProps {
  children: ReactElement
}

const CarrinhoProvider = ({ children } : CarrinhoProviderProps) => {
  const carrinho: ICarrinho = {
    itens: [],
    total: 0
  }
  return(
    <CarrinhoContext.Provider value={{ carrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export default CarrinhoProvider;