import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

import PostEdit from './PostEdit';
import PostSubmit from './PostSubmit';
import PostList from './PostList';
import PostSingle from './PostSingle';
import PageNotFound from './PageNotFound';

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
                <Route exact path="/submit" component={PostSubmit} />

                <Route exact path="/:category" render={({ match }) => (
                    <PostList category={match.params.category} />
                )} />

                <Route exact path="/:category/:postId" render={({ match }) => (
                    <PostSingle category={match.params.category} postId={match.params.postId} />
                )} />

                <Route exact path="/:category/:postId/edit" render={({ match }) => (
                    <PostEdit category={match.params.category} postId={match.params.postId} />
                )} />

                <Route component={PageNotFound} />
            </Switch>
        </div>
        );
    }
}

export default withRouter(App);
