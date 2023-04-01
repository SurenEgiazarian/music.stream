import iconSearch from "./img/icon/search.svg";

function SearchModule() {
    return(
        <div className="centerblock__search search">
            <img className="search__svg" src={iconSearch} alt="search" />
            <input className="search__text" type="search" placeholder="Поиск" name="search"></input>
        </div>
    )
}

export default SearchModule;