import SearchModule from "./SearchModule";
import FilterModule from "./FilterModule";
import TitleModule from "./TitleModule";
import Playlist from "./Playlist";

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <SearchModule />
      <FilterModule />
      <TitleModule />
      <Playlist />
    </div>
  );
}

export default CenterBlock;
