import { useEffect, useState } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    );

    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    // fetch 사용은 요즘 잘 안하고, async, await을 사용함
    //   fetch(
    //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    //   )
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setMovies(json.data.movies);
    //       setLoading(false);
    //     });
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        movies.map((movie) => {
          return (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              image={movie.medium_cover_image}
              summary={movie.summary}
              genres={movie.genres}
            />
          );
        })
      )}
    </div>
  );
};

export default Home;
