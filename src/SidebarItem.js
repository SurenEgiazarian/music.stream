import React from "react";
const { useEffect, useState } = React;

function SidebarItem(props) {
  const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, 5000);
  });

  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="#">
        { skeleton ? <div className="skeleton__sidebar-img"></div> : <img className="sidebar__img" src={ props.src } alt="day's playlist" /> }
      </a>
    </div>
  );
}

export default SidebarItem;
