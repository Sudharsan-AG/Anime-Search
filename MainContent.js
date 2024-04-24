import React from "react";
import AnimeCard from "./AnimeCard";
import { useEffect, useState, useReducer } from "react";
import Favourite from "./Favourite";

function MainContent(props) {
  const initialValue = [];
  const [favourite, dispatchState] = useReducer(useFav, initialValue);
  function useFav(fav, action) {
    console.log(fav);
    console.log(action);
    // console.log(favourite)

    switch (action.type) {
      case "ADD_FAV":
        return [...fav, action.payload];
      case "REMOVE_FAV":
        // console(fav)
        // console(action.payload)
        return fav.filter((favu) => favu.mal_id !== action.payload.mal_id);

      default:
        return fav;
    }
  }

  const [showFavourites, setShowFavourites] = useState(false);

  console.log(favourite);
  function addfav(fav) {
    console.log(fav);
    dispatchState({ type: "ADD_FAV", payload: fav });
    console.log(favourite);
  }
  useEffect(() => {
    console.log("Updated Favourites:", favourite);
  }, [favourite]);

  function MyFavourites() {
    setShowFavourites(!showFavourites);
  }

  return (
    <main>
      <div className="main-head">
        <div className="fav" onClick={() => MyFavourites()}>
          {showFavourites ? "Back to search" : "My Favourites"}
        </div>
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="search"
            placeholder="Searc for an anime..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>

          <div className="anime-list">
              
        {favourite.map((fav) => (
          <Favourite
            key={fav.mal_id}
            fav={fav}
            showFavourites={showFavourites}
            dispatchState={dispatchState}
          />
        ))}
        {showFavourites && <Favourite />}
      </div>

      {!showFavourites && (
        <div className="anime-list">
          {props.search == [] &&
            props.topAnime.map((ani) => {
              const imageUrl = ani.images.webp.large_image_url;
              return (
                <article className="anime-card" key={ani.mal_id}>
                  <a href={ani.url} target="_blank" rel="noreferrer">
                    <figure>
                      <img src={imageUrl} alt="Anime_Image" />
                    </figure>
                    <h3>{ani.title}</h3>
                  </a>
                  <button onClick={() => addfav(ani)} className="favourite">
                    Add to fav
                  </button>
                </article>
              );
            })}
        </div>
      )}

      {!showFavourites && (
        <div className="anime-list">
          {props.animeList.map((anime) => (
            <AnimeCard anime={anime} key={anime.mal_id} addfav={addfav} />
          ))}
        </div>
      )}

      <div className="anime-list">
        {/* Render Favourite component for each favourite */}
      </div>
    </main>
  );
}

export default MainContent;
