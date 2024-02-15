import { useCarrinho } from "../../graphql/carrinho/hooks";

const Carrinho = () => {
  const carrinho = useCarrinho();
  console.log(carrinho?.data);

  return (
    <h1>Carrinho</h1>
  );
};

export default Carrinho;