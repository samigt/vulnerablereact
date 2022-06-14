import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Jumbotron from "./Jumbotron";
import Feed from "./Feed";
import Contact from "./Contact";
import About from "./About";
import data from "../data/data.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Manny Henri",
      jumbotronTitle: "List of courses",
      feeds: [],
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({
      feeds: data,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
          <Jumbotron title={this.state.jumbotronTitle} />

          <Routes>
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/"
              render={(props) => <Feed feeds={this.state.feeds} />}
            />
          </Routes>

          <div className="footer">
            <p>&copy; {this.state.name} Inc.</p>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
