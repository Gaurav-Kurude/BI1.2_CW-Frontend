import useFetch from "../hooks/useFetch";

const MovieByTitle = ({title}) =>{
   
    const {data, loading, error} = useFetch(`https://bi-1-1-cw-backend-reqo.vercel.app/movies/${title}`);
    // console.log(data);

    if (loading) {
      return <p>Loading movie details...</p>;
    }

    if (error) {
      return <p>Error loading movie: {error}</p>;
    }

    if (!data) {
      return <p>Movie not found.</p>;
    }

    return (
        <div>
            <h2>{data.title}</h2>
            <p>Director: {data.director}</p>
            <p>Country: {data.country}</p>
            <p>Release Year: {data.releaseYear}</p>
            <p>Rating: {data.rating}</p>
            <p>Actors: {data.actors?.join(", ")}</p>
            <p>Awards: {data.awards}</p>
            <p>Plot: {data.plot}</p>
            <img src={data.posterUrl} alt="Poster Image" />
        </div>
    );
};
export default MovieByTitle;