import { useState } from "react";
import Book from "./Book";
import CD from "./CD";
import Movie from "./Movie";

const Media = () => {
  const [media, setMedia] = useState({
    books: [
      {
        id: 1,
        author: "Author A",
        title: "Book A",
        pages: 200,
        isCheckedOut: false,
        ratings: [5, 4, 3],
      },
      {
        id: 2,
        author: "Author B",
        title: "Book B",
        pages: 150,
        isCheckedOut: false,
        ratings: [4, 3],
      },
    ],
    movies: [
      {
        id: 1,
        director: "Director A",
        title: "Movie A",
        runTime: 120,
        isCheckedOut: false,
        ratings: [5, 5, 4],
      },
      {
        id: 2,
        director: "Director B",
        title: "Movie B",
        runTime: 90,
        isCheckedOut: false,
        ratings: [4, 4],
      },
    ],
    cds: [
      {
        id: 1,
        artist: "Artist A",
        title: "CD A",
        isCheckedOut: false,
        ratings: [3, 4, 5],
        songs: ["Song 1", "Song 2"],
      },
      {
        id: 2,
        artist: "Artist B",
        title: "CD B",
        isCheckedOut: false,
        ratings: [5, 5],
        songs: ["Song A", "Song B"],
      },
    ],
  });

  const getAverageRating = (ratings) => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return (total / ratings.length).toFixed(2);
  };
  const addRating = (type, id, rating) => {
    setMedia((prevMedia) => {
      const updatedMedia = prevMedia[type].map((item) =>
        item.id === id ? { ...item, ratings: [...item.ratings, rating] } : item
      );
      return { ...prevMedia, [type]: updatedMedia };
    });
  };
  const toggleCheckOutStatus = (type, id) => {
    setMedia((prevMedia) => {
      const updatedMedia = prevMedia[type].map((item) =>
        item.id === id ? { ...item, isCheckedOut: !item.isCheckedOut } : item
      );
      return { ...prevMedia, [type]: updatedMedia };
    });
  };
  return (
    <div className="container">
      <Book
        addRating={addRating}
        toggleCheckOutStatus={toggleCheckOutStatus}
        getAverageRating={getAverageRating}
        books={media.books}
      />
      <Movie
        addRating={addRating}
        toggleCheckOutStatus={toggleCheckOutStatus}
        getAverageRating={getAverageRating}
        movies={media.movies}
      />
      <CD
        addRating={addRating}
        toggleCheckOutStatus={toggleCheckOutStatus}
        getAverageRating={getAverageRating}
        cds={media.cds}
      />
    </div>
  );
};

export default Media;
