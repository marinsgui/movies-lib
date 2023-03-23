import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {

    const imageURL = import.meta.env.VITE_IMG;

    return (
        <li className='w-72 h-96 rounded-2xl relative flex items-end duration-500 shadow-lg before:content-[""] before:absolute before:top-0 before:left-0 before:block before:w-full before:h-full before:z-10 before:duration-500 before:rounded-md hover:translate-y-5 hover:before:opacity-100 hover:before:bg-[#00000096] group'>
            <div className='w-full h-full absolute top-0 left-0'>
                <img src={imageURL + movie.poster_path} alt={movie.title} className='w-full h-full rounded-2xl' />
            </div>
            <div className='relative z-30 p-4 pb-7 text-gray-200 opacity-0 translate-y-10 duration-500 group-hover:opacity-100 group-hover:translate-y-1'>
                <h2>{movie.title}</h2>
                <p className='text-base font-medium'>Data de lançamento: {movie.release_date}</p>
                <p className='tracking-wide text-sm mt-1 mb-4'>&#x2B50; {movie.vote_average}</p>
                <Link 
                    to={`/details/${movie.id}`} 
                    className='p-2 outline-none border-none rounded bg-purple-800 font-bold text-white hover:bg-purple-900 hover:text-gray-200'
                >
                    Veja mais
                </Link>
            </div>
        </li>
    )
}