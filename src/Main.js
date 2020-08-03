import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Blog from "./Blog/Blog";
  import Portfolio from "./Portfolio";
 
  class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <div className="header">
            <h1>James Pereira</h1>
                <ul className="nav">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                </ul>
            </div>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/blog" component={Blog}/>
                <Route path="/portfolio" component={Portfolio}/>
            </div>
            <div className="footer">
                <p>Copyright &copy; 2020 James Pereira</p>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;