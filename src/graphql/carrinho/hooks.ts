import { useQuery } from "@apollo/client"
import { OBTER_CARRINHO } from "./queries"
import { ICarrinho } from "../../interfaces/ICarrinho"

export const useCarrinho = () => {
  return useQuery<{ carrinho: ICarrinho }>(OBTER_CARRINHO)
}