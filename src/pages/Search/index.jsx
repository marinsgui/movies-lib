import style from '../../styles/GlobalStyles.module.css';

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
        <main className={style.container}>
            <h1>Resultados para: {query}</h1>
            {!movies && movies.length === 0 && (
                <Loading />
            )}
            {movies && movies.length > 0 && (
                <ul className={style.movies_container}>
                    {movies.map(item => (
                        <MovieCard key={item.id} movie={item} />
                    ))}
                </ul>
            )}
        </main>
    )
}