import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio</h2>
                <p className="content-description">Place holder for all porfolio items; games sites / web apps.
                </p>
                <div>
                    <h3>Todo List</h3>
                    <a href="https://i.imgur.com/oFyfOmj.png" target="_blank" rel="noopener noreferrer" className="imageLink">
                        <img height="200px;" alt="Todo List web app" src="https://i.imgur.com/oFyfOmj.png" />
                    </a>
                    <p>Simple <a href="https://jamespereira.github.io/todo-list/">Todo List</a> list using react, bulma css and firebase for realtime database integration.</p>
                </div>

                <div>
                    <h3>My Games</h3>
                    <a href="https://i.imgur.com/FvywWTp.png" target="_blank" rel="noopener noreferrer" className="imageLink">
                        <img height="200px;" alt="Todo List web app" src="https://i.imgur.com/FvywWTp.png" />
                    </a>
                    <p>A sorted shelf of <a href="https://jamespereira.github.io/my-games/">my games</a>. SPA built off learnings from Udacity react course, including ES6, Public API and Firebase for realtime database integration.</p>
                </div>
            </div>
        );
    }
}

export default Portfolio;