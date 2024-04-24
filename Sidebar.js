const Sidebar = ({ topAnime }) => {

  return (
    <aside>
      <nav>
        <h1>Top Anime</h1>

        {topAnime.map((anime) => (
            <a href={anime.url} target="_blank" key={anime.mal_id} rel="noreferrer">
            {anime.title}
          </a>
        ))}
       
      </nav>
    </aside>
  );
};
export default Sidebar;
