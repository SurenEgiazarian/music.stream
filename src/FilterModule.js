import Filter from "./Filter";
import React from "react";
const { useState } = React;

const authors = [
  {
    id: 1,
    text: "Michael Jackson",
  },
  {
    id: 2,
    text: "Frank Sinatra",
  },
  {
    id: 3,
    text: "Calvin Harris",
  },
  {
    id: 4,
    text: "Zhu",
  },
  {
    id: 5,
    text: "Arctic Monkeys",
  },
];

const years = [
  {
    text: "2007",
  },
  {
    text: "1960",
  },
  {
    text: "2015",
  },
  {
    text: "2005",
  },
  {
    text: "2010",
  },
];

const genres = [
  {
    text: "Поп",
  },
  {
    text: "Рок",
  },
  {
    text: "Джаз",
  },
];

function FilterModule() {
  const [visibleFilterAuthor, setVisibleFilterAuthor] = useState(false);
  const [filterAuthor, setFilterAuthor] = useState(false);
  const toggleVisibilityAuthor = () => {
    setVisibleFilterAuthor(!visibleFilterAuthor);
    setVisibleFilterYear(false);
    setVisibleFilterGenre(false);

    setFilterAuthor(true);
    setFilterYear(false);
    setFilterGenre(false);
  };
  const [visibleFilterYear, setVisibleFilterYear] = useState(false);
  const [filterYear, setFilterYear] = useState(false);
  const toggleVisibilityYear = () => {
    setVisibleFilterYear(!visibleFilterYear);
    setVisibleFilterAuthor(false);
    setVisibleFilterGenre(false);

    setFilterYear(true);
    setFilterAuthor(false);
    setFilterGenre(false);
  };
  const [visibleFilterGenre, setVisibleFilterGenre] = useState(false);
  const [filterGenre, setFilterGenre] = useState(false);
  const toggleVisibilityGenre = () => {
    setVisibleFilterGenre(!visibleFilterGenre);
    setVisibleFilterAuthor(false);
    setVisibleFilterYear(false);

    setFilterGenre(true);
    setFilterAuthor(false);
    setFilterYear(false);
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div
        className={ filterAuthor ? "filter__button button-author _btn-text filter__button_active" : "filter__button button-author _btn-text"} 
        onClick={toggleVisibilityAuthor}
      >
        исполнителю
      </div>
      <div
        className={ filterYear ? "filter__button button-year _btn-text filter__button_active" : "filter__button button-year _btn-text" }
        onClick={toggleVisibilityYear}
      >
        году выпуска
      </div>
      <div
        className={ filterGenre ? "filter__button button-genre _btn-text filter__button_active" : "filter__button button-genre _btn-text" }
        onClick={toggleVisibilityGenre}
      >
        жанру
      </div>
      {visibleFilterAuthor && (
        <div className="filter__menu filter__menu_authors">
          <Filter data={authors} />
        </div>
      )}
      {visibleFilterYear && (
        <div className="filter__menu filter__menu_years">
          <Filter data={years} />
        </div>
      )}
      {visibleFilterGenre && (
        <div className="filter__menu filter__menu_genres">
          <Filter data={genres} />
        </div>
      )}
    </div>
  );
}

export default FilterModule;
