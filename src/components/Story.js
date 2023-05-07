export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.img} alt={props.description} />
      </div>
      <div className="usuario">{props.user}</div>
    </div>
  );
}
