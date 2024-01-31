import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Profile, Photos, Cocktails, Pokemon } from "./pages";

function MainBox() {
  const [selectedTab, setSelectedTab] = useState('profile')

  const details = {
    profile: <Profile />,
    photo: <Photos />,
    cocktails: <Cocktails />,
    pokemon: <Pokemon />
  }

  let detailsToDisplay = details[selectedTab]

  function onSelectedTabClick(tab) {
    console.log(tab)
    setSelectedTab(tab)
  }

  return (
    <div>
      <MenuBar 
        selectedTab={selectedTab} 
        onSelectedTabClick={onSelectedTabClick}
      />
      {detailsToDisplay}
    </div>
  );
}

export default MainBox;
