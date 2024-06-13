const CD = ({ cds, addRating, toggleCheckOutStatus, getAverageRating }) => {
  return (
    <div className="media__list">
      <h2>CDs</h2>
      {cds.map((cd) => (
        <div key={cd.id} className="media__item cd__item">
          <h3>{cd.title}</h3>
          <p>Artist: {cd.artist}</p>
          <p>Songs: {cd.songs.join(", ")}</p>
          <p>Checked Out: {cd.isCheckedOut ? "Yes" : "No"}</p>
          <p className="average__rating">
            Average Rating: {getAverageRating(cd.ratings)}
          </p>
          <div className="media__item__actions">
            <button onClick={() => toggleCheckOutStatus("cds", cd.id)}>
              Toggle Checkout
            </button>
            <button
              onClick={() =>
                addRating("cds", cd.id, Math.floor(Math.random() * 5) + 1)
              }
            >
              Add Random Rating
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CD;
