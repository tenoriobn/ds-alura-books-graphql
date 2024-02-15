import { useQuery } from "@apollo/client"
import { OBTER_CARRINHO } from "./queries"

export const useCarrinho = () => {
  return useQuery(OBTER_CARRINHO);
}