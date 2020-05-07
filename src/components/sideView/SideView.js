import React from "react";
import { Switch, Route } from "react-router-dom";
import Bio from "./Bio";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";

const SideView = () => {
  return (
    <div >
      <h1>This is the SideView</h1>
      <Switch>
        <Route exact path="/bio" component={Bio} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
      </Switch>
    </div>
  );
};

export default SideView;
