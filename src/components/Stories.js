import Story from "./Story";

export default function Stories() {
  const stories_package = [
    {
      src: "assets/img/9gag.svg",
      alt: "9gag",
      usuario: "9gag",
    },
    {
      src: "assets/img/meowed.svg",
      alt: "meowed",
      usuario: "meowed",
    },
    {
      src: "assets/img/barked.svg",
      alt: "barked",
      usuario: "barked",
    },
    {
      src: "assets/img/nathanwpylestrangeplanet.svg",
      alt: "nathanwpylestrangeplanet",
      usuario: "nathanwpylestrangeplanet",
    },
    {
      src: "assets/img/memeriagourmet.svg",
      alt: "memeriagourmet",
      usuario: "memeriagourmet",
    },
    {
      src: "assets/img/filomoderna.svg",
      alt: "filomoderna",
      usuario: "filomoderna",
    },
    {
      src: "assets/img/respondeai.svg",
      alt: "respondeai",
      usuario: "respondeai",
    },
    {
      src: "assets/img/wawawicomics.svg",
      alt: "wawawicomics",
      usuario: "wawawicomics",
    },
  ];

  return (
    <div className="stories">
      {stories_package.map((story) => (
        <Story
          img={story.src}
          key={story.usuario}
          description={story.alt}
          user={story.usuario}
        />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
