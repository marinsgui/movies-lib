import './styles.css';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Details from '../Details';
import Loading from '../../components/Loading';

export default function PopularMovies() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setPopularMovies(data.results)
    }
    
    useEffect(() => {
        const popularMoviesUrl = `${moviesURL}popular?${apiKey}&language=pt-BR&region=BR`
        
        getPopularMovies(popularMoviesUrl)
    }, [])

    return (
        <main className='container'>
            <h1>Filmes populares</h1>
            {popularMovies.length === 0 && (
                <Loading />
            )}
            {popularMovies.length > 0 && (
                <ul>
                    {popularMovies.map(item => (
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