import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom';

import PostForm from "./PostSubmit";
import PostList from "./PostList";
import PostSingle from "./PostSingle";

import logo from '../resources/images/logo-300px.png';

class App extends Component {
render() {
    return (
        <div>
            <header className="header wrapper">
                <div className="container small-container">
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>

                    <Link to="/submit">
                        <button className="add-post">
                            Post something
                        </button>
                    </Link>
                </div>
            </header>

            <Switch>
                <Route exact path="/" component={PostList} />
                <Route path="/submit" component={PostForm} />
                <Route path="/post"  component={PostSingle} />

                <Route path="/:category" exact render={({match, location}) => (
                    <PostList category={match.params.category} />
                )} />
            </Switch>
        </div>
        );
    }
}

export default withRouter(App);
