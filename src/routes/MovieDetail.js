import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetail;
