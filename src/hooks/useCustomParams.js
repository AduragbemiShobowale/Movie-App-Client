import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

export const useCustomParams = (data) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredMovies, setFilteredMovies] = useState([]);

  const userInput = searchParams.get("search")
    ? searchParams.get("search")
    : "";

  useEffect(() => {
    if (data) {
      const searchedMovies = data.filter((movie) => {
        return movie.title.toLowerCase().includes(userInput?.toLowerCase());
      });
      setFilteredMovies(searchedMovies);
    }
  }, [searchParams, data]);

  return { userInput, filteredMovies };
};
