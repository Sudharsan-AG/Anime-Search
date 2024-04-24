const Favourite = ({ fav, showFavourites,dispatchState }) => {
    
    function Removefav(fav) {
        console.log(fav);
        dispatchState({ type: "REMOVE_FAV", payload: fav });
        console.log(fav);
      }

    if (!showFavourites) {
        return null; // or return some default content
      }
    
      // Check if fav exists
      if (!fav) {
        return null; // or return some default content
      }
    console.log(fav)
    const imageUrl = fav.images.webp.image_url;
  return (
      <>
         
      <article className="anime-card">
        <a href={fav.url} target="_blank" rel="noreferrer">
          <figure>{ <img src={imageUrl} alt="Anime_Image" /> }</figure>
          <h3>{fav.title}</h3>
        </a>
        <button onClick={() => Removefav(fav)} className="favourite">Remove from fav</button>
          </article>
          
          
    </>
  );
};
export default Favourite;
