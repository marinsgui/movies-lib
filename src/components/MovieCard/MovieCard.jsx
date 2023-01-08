export default function MovieCard({ movie }) {
    return (
        <li key={movie.id} className={style.card_container}>
            <Link to={`/Details/${movie.id}`} element={<Details />}>
                <img src={imageURL + movie.poster_path} alt="Movie Poster" />
            </Link>
            <h2>{movie.title}</h2>
            <p><span>Data de lançamento:</span> {movie.release_date}</p>
            <p>&#x2B50; {movie.vote_average}</p>
        </li>
    )
}