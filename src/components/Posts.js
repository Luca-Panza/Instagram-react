import Post from "./Post";

export default function Posts() {
  const posts_package = [
    {
      src_profile: "assets/img/meowed.svg",
      alt_profile: "meowed",
      profile_name: "meowed",
      post_picture: "assets/img/gato-telefone.svg",
      alt_post_picture: "gato-telefone",
      like_picture: "assets/img/respondeai.svg",
      like_alt: "respondeai",
      last_like: "respondeai",
      like_number: 101523,
    },
    {
      src_profile: "assets/img/barked.svg",
      alt_profile: "barked",
      profile_name: "barked",
      post_picture: "assets/img/dog.svg",
      alt_post_picture: "dog",
      like_picture: "assets/img/adorable_animals.svg",
      like_alt: "adorable_animals",
      last_like: "adorable_animals",
      like_number: 99159,
    },
    {
      src_profile: "assets/img/meowed.svg",
      alt_profile: "meowed2",
      profile_name: "meowed",
      post_picture: "assets/img/gato-telefone.svg",
      alt_post_picture: "gato-telefone",
      like_picture: "assets/img/respondeai.svg",
      like_alt: "respondeai",
      last_like: "respondeai",
      like_number: 101523,
    },
  ];

  return (
    <div className="posts">
      {posts_package.map((post) => (
        <Post
          img_profile={post.src_profile}
          alt={post.alt_profile}
          user={post.profile_name}
          picture={post.like_picture}
          picture_posted={post.post_picture}
          alt_picture={post.alt_post_picture}
          alt_like={post.like_alt}
          last_like={post.last_like}
          likes={post.like_number}
          key={post.alt_profile}
        />
      ))}
    </div>
  );
}
