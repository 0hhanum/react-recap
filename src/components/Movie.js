import PropTypes from "prop-types";

const Movie = ({ cover_image, title, summary, genres }) => {
    return <div>
        <img src={cover_image} alt="coverImg" />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres ? genres.map((genre) => <li key={genre}>{genre}</li>) : null}
        </ul>
    </div>
}

Movie.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}
export default Movie;
