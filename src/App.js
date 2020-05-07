import React from "react";
import "./App.css";
import MainView from "./components/MainView";
import SideView from "./components/sideView/SideView";

const App = () => {
  return (
    <div className="mainApp">
      
      <div className="mainView">
        <MainView/>
      </div>
      <div className="sideView">
        <SideView />
      </div>
    </div>
  );
};

export default App;
