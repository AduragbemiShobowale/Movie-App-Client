import React from "react";
import Trending from "./Trending";
import Recommended from "./Recommended";
import { useFetch } from "../../hooks/useFetch";

import SearchResult from "./SearchResult";
import { useCustomParams } from "../../hooks/useCustomParams";
import Loading from "../../utils/Loading";

const Home = () => {
  const { data, error, loading, updateUI } = useFetch("/api/movie");
  const { userInput, filteredMovies } = useCustomParams(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (userInput) {
    return (
      <SearchResult userInput={userInput} filteredMovies={filteredMovies} />
    );
  }
  return (
    <div className="px-4 ">
      <div className="text-start py-3">
        <h2 className="py-2">Trending</h2>
        <Trending
          data={data}
          error={error}
          loading={loading}
          updateUI={updateUI}
        />
      </div>

      <div className="text-start">
        <h2 className="py-2">Recommended for you</h2>
        <Recommended
          data={data}
          error={error}
          loading={loading}
          updateUI={updateUI}
        />
      </div>
    </div>
  );
};

export default Home;
