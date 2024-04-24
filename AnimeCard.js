import React from "react";

const AnimeCard = ({ anime, addfav }) => {
  const imageUrl = anime.images.webp.image_url;
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={imageUrl} alt="Anime_Image" />
        </figure>
        <h3>{anime.title}</h3>
          </a>
          <button onClick={() => addfav(anime)} className="favourite">Add to fav</button>
    </article>
  );
};

export default AnimeCard;
