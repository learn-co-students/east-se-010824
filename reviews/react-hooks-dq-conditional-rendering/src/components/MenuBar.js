import React from "react";

function MenuBar(props) {
  const { selectedTab, onSelectedTabClick } = props

  function getClassName(icon) {
    return icon === selectedTab ? "item active": "item"
  }


  return (
    <div className="ui four item menu">
      <span 
        className={getClassName('profile')} 
        onClick={() => onSelectedTabClick('profile')}
      >
        <i className="user large icon" />
      </span>

      <span 
        className={getClassName('photo')}
        onClick={() => onSelectedTabClick('photo')}
      >
        <i className="photo large icon" />
      </span>

      <span 
        className={getClassName('cocktails')}
        onClick={() => onSelectedTabClick('cocktails')}
      >
        <i className="cocktail large icon" />
      </span>

      <span 
        className={getClassName('pokemon')}
        onClick={() => onSelectedTabClick('pokemon')}
      >
        <i className=" themeisle large icon" />
      </span>
    </div>
  );
}

export default MenuBar;
