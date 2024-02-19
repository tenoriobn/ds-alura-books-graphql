import { ReactElement, createContext, useContext } from "react";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { useCarrinho } from "../../graphql/carrinho/hooks";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";

export interface ICarrinhoContext {
  carrinho?: ICarrinho
  adicionarItemCarrinho: (item: IItemCarrinho) => void
}

export const CarrinhoContext = createContext<ICarrinhoContext>({ adicionarItemCarrinho: () => null });

interface CarrinhoProviderProps {
  children: ReactElement
}

const CarrinhoProvider = ({ children } : CarrinhoProviderProps) => {
  const {data} = useCarrinho();
  const adicionarItemCarrinho = (item: IItemCarrinho) => {
    console.log('[CarrinhoProvider] - adicionarItemCarrinho', item)
  }

  return(
    <CarrinhoContext.Provider value={{ carrinho: data?.carrinho, adicionarItemCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinhoContext = () => {
  return useContext<ICarrinhoContext>(CarrinhoContext);
}

export default CarrinhoProvider;