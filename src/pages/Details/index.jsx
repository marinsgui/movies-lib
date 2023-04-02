import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loading from '../../components/Loading/Loading'

export default function Details() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const {id} = useParams()
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)

    const getMovie = async (url) => {
        setLoading(true)
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
        setLoading(false)
    }

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}&language=pt-BR&region=BR`
        getMovie(movieUrl)
    }, [])
    
    return (
        <main className='min-h-[90vh] md:py-8 px-4 bg-slate-100 dark:bg-gray-800'>
            {loading && (
                <Loading />
            )}

            {movie && (
                <section className='max-w-4xl mx-auto text-black dark:text-white'>
                    <div className='pt-5 md:flex md:flex-col md:justify-between md:items-center md:mb-5'>
                        <h2 className='m-0 text-4xl'>{movie.title}</h2>
                        <p><span className='font-bold'>Título original:</span> {movie.original_title}</p>
                    </div>
                    <div className='py-5 md:flex md:justify-around md:items-center md:gap-4'>
                        <div className='flex flex-col items-start md:min-w-[30%]'>
                            <img src={imageURL + movie.poster_path} alt={movie.title} className='rounded-2xl' />
                            <h3>&#x2B50; {movie.vote_average}</h3>
                            <p><span className='font-bold'>Duração:</span> {movie.runtime} min.</p>
                            {movie.genres && <p className='bg-purple-800 rounded-2xl p-2 my-2 text-white'>{movie.genres[0].name}</p>}
                            {movie.genres?.[1] && <p className='bg-purple-800 rounded-2xl p-2 my-2 text-white'>{movie.genres[1].name}</p>}
                            {movie.genres?.[2] && <p className='bg-purple-800 rounded-2xl p-2 my-2 text-white'>{movie.genres[2].name}</p>}
                        </div>
                        <p className='md:-mt-40 text-xl'>{movie.overview}</p>
                    </div>
                </section>
            )}
        </main>
    )
}
