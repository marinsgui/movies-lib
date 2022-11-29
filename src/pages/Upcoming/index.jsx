import '../Popular/styles.css';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Details from '../Details';
import Loading from '../../components/Loading';

export default function Upcoming() {
    const moviesURL = import.meta.env.VITE_API;
    const apiKey = import.meta.env.VITE_API_KEY;
    const imageURL = import.meta.env.VITE_IMG;

    const [upcomingMovies, setUpcomingMovies] = useState([])

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url)
        const data = await res.json()

        setUpcomingMovies(data.results)
    }

    useEffect(() => {
        const upcomingUrl = `${moviesURL}upcoming?${apiKey}&language=pt-BR&region=BR`
        getUpcomingMovies(upcomingUrl)
    }, [])

    return (
        <main className='container'>
            <h1>Próximos lançamentos</h1>
            {upcomingMovies.length === 0 && (
                <Loading />
            )}
            {upcomingMovies.length > 0 && (
                <ul>
                    {upcomingMovies.map(item => (
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