export default function Suggestion(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.img} alt={props.description} />
        <div className="texto">
          <div className="nome">{props.user}</div>
          <div className="seguir">{props.reason}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
