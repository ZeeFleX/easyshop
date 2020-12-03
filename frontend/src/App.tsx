import React, { Component } from "react";
import { Route } from "react-router";
import { inject, observer } from "mobx-react";

// components
import Header from "./components/header/header";
import Mainpage from "./components/mainpage/mainpage";
import Page1 from "./components/page1";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.sass";

@inject("routing", "Navigation")
@observer
export default class App extends Component<any> {
  render() {
    const { menuItems } = this.props.Navigation;
    return (
      <div className="App">
        <Header menuItems={menuItems} />
        <Route exact path={`/`} component={Mainpage} />
        <Route exact path={`/page1`} component={Page1} />
      </div>
    );
  }
}
