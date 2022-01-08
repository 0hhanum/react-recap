import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Movie from "./Movie";

const App = () => {
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
                {movies.map((movie) =>
                    <Movie key={movie.id} cover_image={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres} />)}}
            </div>}
    </div>
}

export default App;
