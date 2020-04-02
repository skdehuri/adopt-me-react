import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adope Me!</Link>
      </header>
      <Router>
        <SearchParams path="/"></SearchParams>
        <Details path="/details/:id"></Details>
      </Router>
    </div>
  );
};

render(<App></App>, document.getElementById("root"));
