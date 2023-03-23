import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const {id} = useParams()
    const [movie, setMovie] = useState([])

    const getMovie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&region=BR`
        getMovie(movieUrl)
    }, [])
    
    return (
        <main className='h-screen py-40 px-4 bg-gray-800'>
            <section className='max-w-4xl mx-auto text-white'>
                <div className='flex flex-col justify-between items-center mb-5'>
                    <h2 className='m-0 text-4xl'>{movie.title}</h2>
                    <p><span className='font-bold'>Título original:</span> {movie.original_title}</p>
                </div>
                <div className='flex justify-around items-center gap-4'>
                    <div className='flex flex-col items-start w-3/4'>
                        <img src={imageURL + movie.poster_path} alt={movie.title} className='rounded-2xl' />
                        <h3>&#x2B50; {movie.vote_average}</h3>
                        <p><span className='font-bold'>Duração:</span> {movie.runtime} min.</p>
                        {movie.genres && <p className='bg-purple-800 rounded-2xl p-2 my-2'>{movie.genres[0].name}</p>}
                        {movie.genres?.[1] && <p className='bg-purple-800 rounded-2xl p-2 my-2'>{movie.genres[1].name}</p>}
                        {movie.genres?.[2] && <p className='bg-purple-800 rounded-2xl p-2 my-2'>{movie.genres[2].name}</p>}
                    </div>
                    <p className='-mt-40 text-xl'>{movie.overview}</p>
                </div>
            </section>
        </main>
    )
}