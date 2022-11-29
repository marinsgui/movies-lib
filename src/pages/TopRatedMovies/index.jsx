import '../Popular/styles.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Details from '../Details';
import Loading from '../../components/Loading';


export default function TopRatedMovies() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [topMovies, setTopMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}&language=pt-BR`
        getTopRatedMovies(topRatedUrl)
    }, [])

    return (
        <main className='container'>
            <h1>Melhores filmes</h1>
            {topMovies.length === 0 && (
                <Loading />
            )}
            {topMovies.length > 0 && (
                <ul>
                    {topMovies.map(item => (
                        <li key={item.id}>
                            <Link to={`/Details/${item.id}`} element={<Details />}>
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