import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Loading from '../../components/Loading/Loading';
import MovieCard from '../../components/MovieCard/MovieCard';

export default function Search() {

    const apiKey = import.meta.env.VITE_API_KEY;
    const searchUrl = import.meta.env.VITE_SEARCH;

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }
    
    useEffect(() => {
        const searchQueryUrl = `${searchUrl}?${apiKey}&query=${query}&language=pt-BR&region=BR`
        
        getSearchedMovies(searchQueryUrl)
    }, [query])

    return (
        <main className='bg-gray-800 min-h-screen'>
            <h1 className='text-center text-5xl text-white pt-5'>Resultados para: {query}</h1>
            {!movies && (
                <Loading />
            )}
            {movies && (
                <ul className='flex justify-around items-center flex-wrap gap-y-8 gap-x-6 w-4/5 mx-auto py-20'>
                    {movies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}