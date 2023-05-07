import Suggestion from "./Suggestion";

export default function Suggestions() {
  const suggestions_package = [
    {
      src: "assets/img/bad.vibes.memes.svg",
      alt: "bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      src: "assets/img/chibirdart.svg",
      alt: "chibirdart",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      src: "assets/img/razoesparaacreditar.svg",
      alt: "razoesparaacreditar",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      src: "assets/img/adorable_animals.svg",
      alt: "adorable_animals",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      src: "assets/img/smallcutecats.svg",
      alt: "smallcutecats",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <>
      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {suggestions_package.map((suggestion) => (
          <Suggestion
            key={suggestion.nome}
            img={suggestion.src}
            description={suggestion.alt}
            user={suggestion.nome}
            reason={suggestion.razao}
          />
        ))}
      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2023 INSTAGRAM DO FACEBOOK</div>
    </>
  );
}
