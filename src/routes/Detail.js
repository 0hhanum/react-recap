import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Detail = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);

    useEffect(async () => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setMovie(json.data.movie);
        setLoading(false);
    })
    return <>
        {loading
            ? "Loading ..."
            :
            <>
                <Movie
                    cover_image={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.description_full}
                    genres={movie.genres}
                    id={movie.id} />

                <Link to="/"><button>Go Back</button></Link>
            </>
        }
    </>
}
export default Detail;