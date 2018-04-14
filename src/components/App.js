import React, { Component } from 'react';
import { Route, Link, withRouter, Switch } from 'react-router-dom';

import PostEdit from "./PostEdit";
import PostSubmit from "./PostSubmit";
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
                <Route path="/submit" component={PostSubmit} />

                <Route path="/:category" exact render={({ match }) => (
                    <PostList category={match.params.category} />
                )} />

                <Route path="/:category/:postId" exact render={({ match }) => (
                    <PostSingle category={match.params.category} postId={match.params.postId} />
                )} />

                <Route path="/:category/:postId/edit" exact render={({ match }) => (
                    <PostEdit category={match.params.category} postId={match.params.postId} />
                )} />
            </Switch>
        </div>
        );
    }
}

export default withRouter(App);
