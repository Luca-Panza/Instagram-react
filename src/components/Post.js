import { useState } from "react";

export default function Post(props) {
  let [book, setBook] = useState("bookmark-outline");

  function change_bookmark() {
    if (book !== "bookmark-outline") {
      book = "bookmark-outline";
      setBook(book);
    } else {
      book = "bookmark";
      setBook(book);
    }
  }

  let [heart_type, setHeart_type] = useState("heart-outline");
  let [heart_color, setHeart_color] = useState("bookmark-outline");

  function likes() {
    if (heart_type === "heart-outline") {
      heart_type = "heart";
      heart_color = "heart_red";
      setHeart_type(heart_type);
      setHeart_color(heart_color);
    } else {
      heart_type = "heart-outline";
      heart_color = "";
      setHeart_type(heart_type);
      setHeart_color(heart_color);
    }
  }

  function likes_picture() {
    if (heart_type === "heart-outline") {
      heart_type = "heart";
      heart_color = "heart_red";
      setHeart_type(heart_type);
      setHeart_color(heart_color);
    }
  }

  return (
    <div data-test="post" className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.img_profile} alt={props.alt} />
          {props.user}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img
          data-test="post-image"
          onDoubleClick={likes_picture}
          src={props.picture_posted}
          alt={props.alt_picture}
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={likes}
              class={heart_color}
              name={heart_type}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              data-test="save-post"
              onClick={change_bookmark}
              name={book}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={props.picture} alt={props.alt_like} />
          <div className="texto">
            Curtido por <strong>{props.last_like}</strong> e {` `}
            <strong data-test="likes-number">
              outras{" "}
              {(props.likes + (heart_type === "heart" ? 1 : 0))
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
              pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
