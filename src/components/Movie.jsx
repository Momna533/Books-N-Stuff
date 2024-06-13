const Movie = ({
  movies,
  getAverageRating,
  toggleCheckOutStatus,
  addRating,
}) => {
  return (
    <div className="media__list">
      <h2>Movie</h2>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="media__item movie__item">
            <h3>{movie.title}</h3>
            <p>Director : {movie.director}</p>
            <p>Run Time: {movie.runTime} minutes</p>
            <p>Checked Out: {movie.isCheckedOut ? "Yes" : "No"}</p>
            <p className="average__rating">
              Average Rating: {getAverageRating(movie.ratings)}
            </p>
            <div className="media__item__actions">
              <button onClick={() => toggleCheckOutStatus("movies", movie.id)}>
                Toggle Checkout
              </button>
              <button
                onClick={() =>
                  addRating(
                    "movies",
                    movie.id,
                    Math.floor(Math.random() * 5) + 1
                  )
                }
              >
                Add Random Rating
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
