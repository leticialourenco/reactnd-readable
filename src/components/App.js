import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PostForm from "./PostSubmit";
import PostList from "./PostList";
import logo from '../utils/logo-300px.png';
import FontAwesome from  'react-fontawesome';

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
        </div>
        );
    }
}

export default App;
