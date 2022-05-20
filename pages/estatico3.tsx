export function getStaticProps() {
  return {
    revalidate: 7, //Segundos
    props: {
      numero: Math.random(),
    },
  };
}

export default function Estatico3(props: any) {
  return (
    <div>
      <h1>Estático #3</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}
