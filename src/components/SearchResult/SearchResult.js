import React from "react";
import uuid from "uuid";
import "./SearchResult.scss";

const SearchResult = (props) => {
  return (
    <div className="result">
      {props.foundations.length ? (
        props.foundations.map(item => <li key={uuid()}>{item.name}</li>)
      ) : (
        <p>Nie znaleziono fundacji spałniającej wybrane kryteria</p>
      )}
    </div>
  );
};

export default SearchResult;