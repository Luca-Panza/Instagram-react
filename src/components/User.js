import { useState } from "react";

export default function User() {
  let [name, setName] = useState("catanacomics");
  let [picture, setPicture] = useState("assets/img/catanacomics.svg");

  function change_name() {
    let newname = prompt("Digite o novo nome de usuário");
    newname !== "" && setName(newname);
  }

  function change_picture() {
    let new_picture = prompt("Insira o link da imagem de usuário");
    new_picture !== "" && setPicture(new_picture);
  }

  return (
    <div className="usuario">
      <img
        data-test="profile-image"
        onClick={change_picture}
        src={picture}
        alt="imagem de perfil"
      />
      <div className="texto">
        <span>
          <strong data-test="name">{name}</strong>
          <ion-icon
            data-test="edit-name"
            onClick={change_name}
            name="pencil"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
