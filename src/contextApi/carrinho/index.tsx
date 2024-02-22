import { createContext, ReactElement, useContext } from "react";
import { useCarrinho, useAdicionarItem } from "../../graphql/carrinho/hooks";
import { ICarrinho } from "../../interfaces/ICarrinho";
import { IItemCarrinho } from "../../interfaces/IItemCarrinho";


export interface ICarrinhoContext {
    carrinho?: ICarrinho
    adicionarItemCarrinho: (item: IItemCarrinho) => void
}

export const CarrinhoContext = createContext<ICarrinhoContext>({
    adicionarItemCarrinho: () => null
})

interface CarrinhoProviderProps {
    children: ReactElement
}

const CarrinhoProvider = ({ children } : CarrinhoProviderProps) => {
    
    const { data } = useCarrinho()

    const [adicionaItem] = useAdicionarItem()

    const adicionarItemCarrinho = (item: IItemCarrinho) => {
        adicionaItem({
            variables: {
                item: {
                    livroId: item.livro.id,
                    opcaoCompraId: item.opcaoCompra.id,
                    quantidade: item.quantidade
                }
            }
        })
    }

    return (
        
        <CarrinhoContext.Provider 
            value={{ carrinho: data?.carrinho, adicionarItemCarrinho }}
        >
            {children}
        </CarrinhoContext.Provider>
    )
}

export const useCarrinhoContext = () => {
    return useContext<ICarrinhoContext>(CarrinhoContext)
}

export default CarrinhoProvider