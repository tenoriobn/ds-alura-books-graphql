import { useMutation, useQuery } from "@apollo/client"
import { ADICIONAR_ITEM, OBTER_CARRINHO } from "./queries"
import { ICarrinho } from "../../interfaces/ICarrinho"

export const useCarrinho = () => {
  return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}

export const useAdicionarItem = () => {
  return useMutation(ADICIONAR_ITEM)
}