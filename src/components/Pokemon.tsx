
function Pokemon(props : { id: number, nome: string, img: string }) {
  const { id, nome, img } = props;
  return (
    <div>
      <h2>{id} - {nome}</h2>
      <div>
        <img src={img} alt={nome} />
      </div>
    </div>
  );
}

export default Pokemon;
