import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostForm from "./PostSubmit";
import PostList from "./PostList";
import PostSingle from "./PostSingle";
import logo from '../utils/logo-300px.png';

class App extends Component {
render() {
    return (
        <div>
            <header className="header wrapper">
                <div className="container small-container">
                    <Link exact to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>

                    <Link to="/submit">
                        <button className="add-post">
                            Post something
                        </button>
                    </Link>
                </div>
            </header>

            <Route exact path="/" render={() => (
                <PostList/>
            )}/>

            <Route path="/submit" render={() => (
                <PostForm/>
            )}/>

            <Route path="/post" render={() => (
                <PostSingle/>
            )}/>
        </div>
        );
    }
}

export default App;
