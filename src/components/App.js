import React, { Component } from 'react';
import logo from '../utils/logo-300px.png';
import FontAwesome from  'react-fontawesome';

class App extends Component {
render() {
    return (
        <div>
            <header className="header wrapper">
                <div className="container small-container">
                    <img src={logo} className="logo" alt="logo" />
                    <button className="add-post">
                        Post something
                    </button>
                </div>
            </header>

            <div className="content wrapper">
                <div className="container-fluid">
                    <div className="row">

                        <div className="sidebar col-md-2">
                            <ul className="category-list">
                                <li><a href="/">
                                    <FontAwesome name='home' />All Posts
                                </a></li>

                                <li><a href="/">
                                    <FontAwesome name='globe' />React
                                </a></li>

                                <li><a href="/" className="active">
                                    <FontAwesome name='cog' />Redux
                                </a></li>

                                <li><a href="/">
                                    <FontAwesome name='compass' />Udacity
                                </a></li>
                            </ul>
                        </div>

                        <main className="posts col-sm-12 col-md-10">
                            <div className="row sorting-header">
                                <div className="col-md-10 col-lg-9">
                                    <ul>
                                        <li>
                                            <FontAwesome name='sort' />
                                            <span>Sort By</span>
                                        </li>
                                        <li><a href="/" className="active">Newest</a></li>
                                        <li><a href="/">Oldest</a></li>
                                        <li><a href="/">Highest Rated</a></li>
                                        <li><a href="/">Lowest Rated</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2 col-lg-3 results-counter">
                                    <span>235</span> results
                                </div>
                            </div>

                            <div className="post-list-container">
                                <ul>
                                    <li className="post-item">
                                        <span className="score-box">
                                            <button>
                                                <FontAwesome name='caret-up' />
                                            </button>

                                            <span className="score">405</span>

                                            <button>
                                                <FontAwesome name='caret-down' />
                                            </button>
                                        </span>

                                        <a href="/" className="post-title">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</a>

                                        <hr/>

                                        <div className="post-info">
                                            <span className="comment-counter">324</span> comments
                                            <span className="separator"> | </span>

                                            <span className="timestamp">3 hours ago</span>
                                            <span className="separator"> | </span>

                                            by <span className="author">Rapha Draccon</span>
                                            <span className="separator"> | </span>
                                            <span className="category">on <a href="/">Redux</a></span>
                                        </div>
                                    </li>









                                    <li className="post-item">
                                        <span className="score-box">
                                            <button>
                                                <FontAwesome name='caret-up' />
                                            </button>

                                            <span className="score">0</span>

                                            <button>
                                                <FontAwesome name='caret-down' />
                                            </button>
                                        </span>

                                        <a href="/" className="post-title">Consectetur adipiscing elit, sed do eiusmod?</a>

                                        <hr/>

                                        <div className="post-info">
                                            <span className="comment-counter">0</span> comments
                                            <span className="separator"> | </span>

                                            <span className="timestamp">3 hours ago</span>
                                            <span className="separator"> | </span>

                                            by <span className="author">Dmitri Sokolov</span>
                                            <span className="separator"> | </span>
                                            <span className="category">on <a href="/">Udacity</a></span>
                                        </div>
                                    </li>










                                    <li className="post-item">
                                        <div className="score-box">
                                            <button>
                                                <FontAwesome name='caret-up' />
                                            </button>

                                            <span className="score">1245</span>

                                            <button>
                                                <FontAwesome name='caret-down' />
                                            </button>
                                        </div>

                                        <a href="/" className="post-title">Lorem "Ipsum" dolor Sit Amet</a>

                                        <hr/>

                                        <div className="post-info">
                                            <span className="comment-counter">23</span> comments
                                            <span className="separator"> | </span>

                                            <span className="timestamp">3 hours ago</span>
                                            <span className="separator"> | </span>

                                            by <span className="author">Stan Kirdey</span>
                                            <span className="separator"> | </span>
                                            <span className="category">on <a href="/">React</a></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;
