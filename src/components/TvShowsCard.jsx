import { Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function TvShowsCard({ show }) {
  const imageURL = import.meta.env.VITE_IMG;

  return (
    <Link to={`/tv/${show.id}`}>
      <li className='
        w-40 h-56
        md:w-72 md:h-96 rounded-2xl relative 
        flex items-end 
        duration-500 shadow-lg shadow-black 
        before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:z-10 before:duration-500 before:rounded-2xl 
        hover:translate-y-5 hover:before:opacity-100 hover:before:bg-[#00000096] 
        group
      '>
        <div className="w-full h-full absolute top-0 left-0">
          <img
            src={imageURL + show.poster_path}
            alt={show.title}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
        <div className="
          relative z-30 
          p-4 pb-7 
          text-gray-200 
          opacity-0 translate-y-10 duration-500 
          group-hover:opacity-100 group-hover:translate-y-1
        ">
          <h2 className="font-bold">{show.title}</h2>
          <span className="flex gap-1">
            <Calendar size={20} /> {" "}
            {show.first_air_date && new Intl.DateTimeFormat("pt-br").format(
              Date.parse(show.first_air_date)
            )}
          </span>
          <span className="flex gap-1 text-sm mb-4">
            <Star size={20} /> {show.vote_average}
          </span>
          <span className="
            p-2 rounded 
            bg-indigo-400 
            font-bold text-white 
            hover:bg-indigo-500
          ">
            Veja mais
          </span>
        </div>
      </li>
    </Link>
  );
}
