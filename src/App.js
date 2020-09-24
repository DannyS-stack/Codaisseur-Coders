import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import PostsPage from "./Pages/PostsPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/post/:id" component={PostsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
