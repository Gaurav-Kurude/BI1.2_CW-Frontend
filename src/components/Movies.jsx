import useFetch from "../hooks/useFetch";

const Movies = () =>{
   const { data, loading , error } = useFetch("https://bi-1-1-cw-backend-reqo.vercel.app/movies");
    // console.log(data)

    if (loading) {
      return <p>Loading movies...</p>;
    }

    if (error) {
      return <p>Error loading movies: {error}</p>;
    }

    return (
        <div>
            {data?.length ? (
              <ul>
                {data.map((movie) => (
                  <li key={movie._id ?? movie.title}>{movie.title}</li>
                ))}
              </ul>
            ) : (
              <p>No movies available.</p>
            )}
        </div>
    )
};
export default Movies;