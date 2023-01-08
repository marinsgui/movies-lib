import style from '../../styles/MovieCard.module.css';

import Details from '../../pages/Details';

import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {

    const imageURL = import.meta.env.VITE_IMG;

    return (
        <li className={style.card_container}>
            <Link to={`/Details/${movie.id}`} element={<Details />}>
                <img src={imageURL + movie.poster_path} alt="Movie Poster" />
            </Link>
            <h2 className={style.card_title}>{movie.title}</h2>
            <p className={style.card_info}><span>Data de lançamento:</span> {movie.release_date}</p>
            <p className={style.card_info}>&#x2B50; {movie.vote_average}</p>
        </li>
    )
}