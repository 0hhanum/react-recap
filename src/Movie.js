import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);

    return <div>
        {loading
            ? "Loading ..."
            : <div>
                {
                    movies.map((movie) => <div key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.summary}</p>
                        <ul>
                            {movie.genres ? movie.genres.map((genre) => <li key={genre}>{genre}</li>) : null}
                        </ul>
                    </div>)
                }
            </div>}
    </div>
}

export default Movie;
