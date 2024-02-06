import React, { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((currentState) => !currentState)
  }

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <TweetsContainer />
    </DarkModeWrapper>
  );
}

export default App;
