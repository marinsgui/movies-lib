import './styles.css';

import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';

import Details from '../Details';
import Loading from '../../components/Loading';

export default function Home() {

    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [allMovies, setAllMovies] = useState([]);

    const getAllMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setAllMovies(data.results)
    }
    
    useEffect(() => {
        const allMoviesUrl = `${moviesURL}popular?${apiKey}&language=pt-BR&region=BR`
        
        getAllMovies(allMoviesUrl)
    }, [])

    return (
        <main className='container'>
            <h1>Últimos lançamentos</h1>
            {allMovies.length === 0 && (
                <Loading />
            )}
            {allMovies.length > 0 && (
                <ul>
                    {allMovies.map(item => (
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