import playlist1 from "./img/playlist01.png";
import playlist2 from "./img/playlist02.png";
import playlist3 from "./img/playlist03.png";
import SidebarItem from "./SidebarItem"

function SidebarBlock() {
  return (
    <div className="main__sidebar sidebar">
      <Personal />
      <Block />
    </div>
  );
}

function Personal() {
  return (
    <div className="sidebar__personal">
      <p className="sidebar__personal-name">Sergey.Ivanov</p>
      <div className="sidebar__avatar"></div>
    </div>
  );
}

function Block() {
  return (
    <div className="sidebar__block">
      <div className="sidebar__list">
        <SidebarItem src={playlist1}/>
        <SidebarItem src={playlist2}/>
        <SidebarItem src={playlist3}/>
      </div>
    </div>
  );
}

export default SidebarBlock;
