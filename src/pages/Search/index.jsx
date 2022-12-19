import '../Popular/styles.css';

import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import Loading from '../../components/Loading';

import Details from '../Details';

export default function Search() {

    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovies(data.results)
    }
    
    useEffect(() => {
        const searchQueryUrl = `https://api.themoviedb.org/3/search/movie/?${apiKey}&query=${query}&language=pt-BR&region=BR`
        
        getSearchedMovies(searchQueryUrl)
    }, [query])

    return (
        <main className='container'>
            <h1>Resultados para: {query}</h1>
            {movies.length === 0 && (
                <Loading />
            )}
            {movies.length > 0 && (
                <ul>
                    {movies.map(item => (
                        <li key={item.id}>
                            <Link to={`/details/${item.id}`} element={<Details />}>
                                <img src={imageURL + item.poster_path} alt="Movie Poster" />
                            </Link>
                            <h2>{item.title}</h2>
                            <p><span>Data de lançamento:</span> {item.release_date}</p>
                            <p>&#x2B50; {item.vote_average}</p>
                        </li>
                    ))}
                </ul>
            )}
        </main>
    )
}