import React from "react";

function Filter(props) {
  const filterTemplate = props.data.map(function (item) {
    return (
      <div className="filter__menu-item" key={item.id}>
        {item.text}
      </div>
    );
  });

  return <React.Fragment>{filterTemplate}</React.Fragment>;
}

export default Filter;
