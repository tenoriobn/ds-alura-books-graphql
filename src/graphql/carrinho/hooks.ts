import { useMutation, useQuery } from "@apollo/client"
import { ICarrinho } from "../../interfaces/ICarrinho"
import { ADICIONAR_ITEM, OBTER_CARRINHO, REMOVER_ITEM } from "./queries"

export const useCarrinho = () => {
    return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}

export const useAdicionarItem = () => {
    return useMutation(ADICIONAR_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}

export const useRemoverItem = () => {
    return useMutation(REMOVER_ITEM, {
        refetchQueries: [
            'ObterCarrinho'
        ]
    })
}