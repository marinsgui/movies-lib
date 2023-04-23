import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AiOutlineClockCircle } from "react-icons/ai";

import Loading from "../components/Loading";
import CategoryItem from "../components/CategoryItem";

export default function Details() {
  const moviesURL = import.meta.env.VITE_API;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imageURL = import.meta.env.VITE_IMG;

  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovie = async (url) => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
    setLoading(false);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&region=BR`;
    getMovie(movieUrl);
  }, []);

  return (
    <main
      className="min-h-screen md:min-h-[90vh] md:py-8 p-4 bg-slate-100 dark:bg-gray-800"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0), rgba(0, 0, 0, 0.5)), url(${
          imageURL + movie.backdrop_path
        })`,
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {loading && <Loading />}

      {movie && (
        <section className="flex flex-col justify-end max-w-6xl md:h-[80vh] text-white">
          <div className="md:flex md:justify-around md:items-end md:gap-4">
            <div className="flex flex-col items-start w-52 m-auto md:min-w-[30%]">
              <img
                src={imageURL + movie.poster_path}
                alt={movie.title}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-around items-center md:items-start">
              <div className="md:flex md:flex-col md:items-center">
                <h2 className="text-4xl md:text-6xl text-center font-bold my-5">
                  {movie.title}
                </h2>
                <p>
                  <span className="font-bold">Título original:</span>{" "}
                  {movie.original_title}
                </p>
              </div>
              <div className="flex items-center my-5">
                <div className="mr-5">
                  <h3>&#x2B50; {movie.vote_average}</h3>
                  <p>
                    <AiOutlineClockCircle
                      size={20}
                      style={{ display: "inline" }}
                    />{" "}
                    {movie.runtime} min.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-1">
                  {movie.genres && (
                    <CategoryItem>{movie.genres[0].name}</CategoryItem>
                  )}
                  {movie.genres?.[1] && (
                    <CategoryItem>{movie.genres[1].name}</CategoryItem>
                  )}
                  {movie.genres?.[2] && (
                    <CategoryItem>{movie.genres[2].name}</CategoryItem>
                  )}
                </div>
              </div>
              <p className="text-xl">{movie.overview}</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
