import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Movie = ({ id, title, image, summary, genres }) => {
  return (
    <Link to={`/movie/${id}`}>
      <h1>{title}</h1>
      <img src={image} alt={`${title}`} />
      <p>{summary}</p>
      {genres.map((genre) => {
        return <li key={genre}>{genre}</li>;
      })}
    </Link>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
