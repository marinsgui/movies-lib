import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchInput from "../components/SearchInput";
import TvShowsList from "../components/TvShowsList";

export default function TvShows() {
  const showsURL = import.meta.env.VITE_API_TV;
  const apiKey = import.meta.env.VITE_API_KEY;

  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState("popular");
  const [loading, setLoading] = useState(false);

  const getShows = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setShows(data.results);
    setLoading(false);
  };

  useEffect(() => {
    const selectedShowItem = menuItems.find(
      (item) => item.path === selectedShow
    );
    const showsUrl = `${showsURL}${
      selectedShow || selectedShowItem.path
    }?${apiKey}&language=pt-BR&region=BR`;

    getShows(showsUrl);
  }, [selectedShow]);

  const menuItems = [
    {
      text: "Em Exibição",
      path: "/airing_today",
      id: 1,
    },
    {
      text: "Em breve",
      path: "/on_the_air",
      id: 2,
    },
    {
      text: "Populares",
      path: "/popular",
      id: 3,
    },
    {
      text: "Maiores avaliações",
      path: "/top_rated",
      id: 4,
    },
  ];

  function showCategoryName() {
    switch (selectedShow) {
      case "/popular":
        return "Populares";
      case "/top_rated":
        return "Maiores avaliações";
      case "/on_the_air":
        return "Em breve";
      case "/airing_today":
        return "Em exibição";
      default:
        return "Populares";
    }
  }

  return (
    <main className="flex flex-col gap-5 px-5 min-h-screen md:px-20 bg-gray-900 bg-[url('./assets/background.svg')] bg-cover bg-center">
      <h1 className="text-6xl font-semibold text-gray-50 mt-20">MoviesLib</h1>
      <SearchInput />

      <nav className="mx-auto md:mx-0 md:w-[810px] flex justify-center items-center gap-1 md:gap-2 p-1 rounded-xl bg-black/20">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`p-4 md:py-2 md:px-8 text-xs md:text-base rounded-lg font-semibold cursor-pointer ${
              selectedShow === item.path
                ? "bg-indigo-400 text-gray-50"
                : "text-gray-300"
            }`}
            onClick={() => setSelectedShow(item.path)}
          >
            {item.text}
          </div>
        ))}
      </nav>

      <h2 className="text-gray-400 text-4xl font-semibold py-5">
        {showCategoryName()}
      </h2>

      <section className="pb-20">
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 mx-auto">
          {loading ? 
                shows.map(() => (
                <Skeleton
                  count={1}
                  baseColor="rgb(16, 29, 58)"
                  highlightColor="rgba(17, 24, 39, 0.5)"
                  duration={1}
                  className="w-40 h-56
        md:w-72 md:h-96 rounded-2xl"
                />
              ))
            : shows.map((show) => <TvShowsList show={show} key={show.id} />)}
        </ul>
      </section>
    </main>
  );
}
