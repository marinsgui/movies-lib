import { useState, useEffect } from 'react';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function PopularMovies() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;

    const [popularMovies, setPopularMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const getPopularMovies = async (url) => {
        setLoading(true)
        const res = await fetch(url)
        const data = await res.json()

        setPopularMovies(data.results)
        setLoading(false)
    }
    
    useEffect(() => {
        const popularMoviesUrl = `${moviesURL}popular?${apiKey}&language=pt-BR&region=BR`
        
        getPopularMovies(popularMoviesUrl)
    }, [])

    return (
        <main className='bg-gray-800 min-h-screen'>
            <h1 className='text-center text-5xl text-white pt-5'>Filmes populares</h1>
            {loading && (
                <Loading />
            )}
            {popularMovies && (
                <ul className='flex justify-around items-center flex-wrap gap-y-8 gap-x-6 w-4/5 mx-auto py-20'>
                    {popularMovies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}