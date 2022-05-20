import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export async function getStaticProps() {
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();
  return {
    props: {
      produtos,
    },
  };
}

export default function Estatico4(props: any) {
  function renderizarProdutos() {
    return props.produtos.map(
      (produto: {
        id: Key | null | undefined;
        nome:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | ReactFragment
          | ReactPortal
          | null
          | undefined;
        preco:
          | string
          | number
          | boolean
          | ReactElement<any, string | JSXElementConstructor<any>>
          | ReactFragment
          | ReactPortal
          | null
          | undefined;
      }) => {
        return (
          <li key={produto.id}>
            {produto.nome} Tem preço de R${produto.preco}
          </li>
        );
      }
    );
  }
  return (
    <div>
      <h1>Estático #04</h1>
      <ul>{renderizarProdutos()}</ul>
    </div>
  );
}
