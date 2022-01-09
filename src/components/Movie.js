import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ cover_image, title, summary, genres, id }) => {
    return <div>
        <Link to={`/movie/${id}`}>
            <img src={cover_image} alt="coverImg" />
            <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <ul>
            {genres ? genres.map((genre) => <li key={genre}>{genre}</li>) : null}
        </ul>
    </div>
}

Movie.propTypes = {
    cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.number.isRequired
}
export default Movie;
