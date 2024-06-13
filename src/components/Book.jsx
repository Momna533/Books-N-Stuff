const Book = ({ books, addRating, toggleCheckOutStatus, getAverageRating }) => {
  return (
    <div className="media__list">
      <h2>Books</h2>
      {books.map((book) => (
        <div key={book.id} className="media__item book__item">
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Pages: {book.pages}</p>
          <p>Checked Out: {book.isCheckedOut ? "Yes" : "No"}</p>
          <p className="average__rating">
            Average Rating: {getAverageRating(book.ratings)}
          </p>
          <div className="media__item__actions">
            <button onClick={() => toggleCheckOutStatus("books", book.id)}>
              Toggle Checkout
            </button>
            <button
              onClick={() =>
                addRating("books", book.id, Math.floor(Math.random() * 5) + 1)
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

export default Book;
