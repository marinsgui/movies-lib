import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Loading from "../components/Loading";
import { Star } from "lucide-react";

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
    <main className="min-h-screen md:py-8 p-4 bg-gray-900 [url('./assets/background.svg')]">
      {loading && <Loading />}

      {movie && (
        <section className="flex flex-col items-center gap-28">
          <div
            className="w-80 h-72 md:w-[75rem] md:h-[30rem] rounded-3xl relative"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(54, 44, 146, 0.40) 0%, rgba(18, 98, 151, 0.40) 100%), url(${
                imageURL + movie.backdrop_path
              }`,
              backgroundPosition: "center right",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="inline-flex flex-col gap-2 w-72 md:min-w-[35rem] p-5 md:p-10 rounded-3xl bg-gray-800/70 backdrop-blur-md absolute -bottom-20 md:-bottom-14 left-4 md:left-14">
              <span className="text-xs text-indigo-300">MoviesLib / Movie</span>
              <h2 className="text-lg md:text-3xl font-semibold text-gray-50">
                {movie.title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-20">
            <div className="order-2 md:order-none">
              <img
                src={imageURL + movie.poster_path}
                alt={movie.title}
                className="rounded-3xl"
              />
            </div>

            <div className="md:w-[30rem] flex flex-col items-start gap-10">
              <h3 className="text-2xl font-bold text-gray-50">
                {movie.tagline}
              </h3>

              <p className="md:text-xl text-gray-300">{movie.overview}</p>

              <div className="inline-flex items-center gap-1 p-2 rounded bg-black text-[#FFAD49]">
                <Star size={18} color="#FFAD49" />{" "}
                <span className="text-sm">
                  {movie.vote_average?.toFixed(1)}
                </span>
              </div>

              <div>
                <h4 className="text-gray-400">Título original:</h4>
                <span className="text-gray-100 text-lg md:text-xl">
                  {movie.original_title}
                </span>
              </div>
              <div>
                <h4 className="text-gray-400">Data de lançamento:</h4>
                <span className="text-gray-100 text-lg md:text-xl">
                  {movie.release_date &&
                    new Intl.DateTimeFormat("pt-BR").format(
                      Date.parse(movie.release_date)
                    )}
                </span>
              </div>
              <div>
                <h4 className="text-gray-400">Duração</h4>
                <span className="text-gray-100 text-lg md:text-xl">{movie.runtime}</span>
              </div>
              <div>
                <h4 className="text-gray-400">Gêneros:</h4>
                <span className="text-gray-100 text-lg md:text-xl">
                  {movie.genres?.[0].name}, {movie.genres?.[1].name},{" "}
                  {movie.genres?.[2].name}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
