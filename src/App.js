import "./App.css";
import NavBlock from "./NavBlock";
import SidebarBlock from "./SidebarBlock";
import BarBlock from "./BarBlock"
import CenterBlock from "./CenterBlock";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="main">
          <NavBlock />
          <CenterBlock />
          <SidebarBlock />
        </div>
        <BarBlock />
      </div>
    </div>
  );
}

export default App;
