import { useState, useEffect,useReducer } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Favourite from "./components/Favourite";

function App() {
  // const initialValue = []
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");
  // const [favourite, dispatchState] = useReducer(useFav, initialValue)
  
  // function useFav(fav, action) {
  //   console.log(fav)
  //   console.log(action)
  //   // console.log(favourite)
     
  //   switch (action.type) {
  //     case "ADD_FAV":
  //       return [...fav, action.payload];
  //     case "REMOVE_FAV":
  //       return fav.filter((favu) => favu.id !== action.payload);
  //     default:
  //       return fav;
  //   }

  // }
  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime`)
      .then((res) => res.json())
      .then((data) => data.data);
    SetTopAnime(temp.slice(0, 6));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };
  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&sfw`
    ).then((res) => res.json());
    SetAnimeList(temp.data);

    console.log(temp.data);
    console.log(animeList);
  };
  useEffect(() => {
    GetTopAnime();
  }, []);

  return (
    <>
      <div>
        <Header />
        <div className="content-wrap">
          <Sidebar topAnime={topAnime} />
          <MainContent
            HandleSearch={HandleSearch}
            search={search}
            SetSearch={SetSearch}
            animeList={animeList}
            topAnime={topAnime}
            // dispatchState={dispatchState}
            // favourite={favourite}
          />
          
         
        </div>
      </div>
    </>
  );
}

export default App;
