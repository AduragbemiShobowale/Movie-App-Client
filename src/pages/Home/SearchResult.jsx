import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";

const SearchResult = ({ userInput, filteredMovies }) => {
  return (
    <div className="px-4 text-start">
      <h2 className="pb-3">
        Found {filteredMovies.length} result of '{userInput}'
      </h2>

      <div className="grid gap-3">
        {filteredMovies.map((movie) => {
          const { _id } = movie;
          return <MovieCard key={_id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default SearchResult;
