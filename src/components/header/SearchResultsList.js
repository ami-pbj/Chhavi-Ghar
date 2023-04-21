import Resultcard from "../watchlist/Resultcard";
import "./SearchResultsList.css";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((movie, id) => {
        return <Resultcard movie={movie} key={id} />;
      })}
    </div>
  );
};
