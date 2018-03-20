import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class PostList extends Component {
    render() {
        return (
            <div>
                <div className="content wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar/>

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
                                            <Link to='/post'>
                                                <a className="post-title">
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                </a>
                                            </Link>

                                            <hr/>

                                            <div className="post-info">
                                                <span className="comment-counter">324</span> comments
                                                <span className="separator"> | </span>

                                                <span className="timestamp">3 hours ago</span>
                                                <span className="separator"> | </span>

                                                by <span className="author">Rapha Draccon</span>

                                                <span className="separator"> | </span>
                                                <span><a href="/">Edit</a></span>

                                                <span className="separator"> | </span>
                                                <span><a href="/">Delete</a></span>
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
                                                <span><a href="/">Edit</a></span>

                                                <span className="separator"> | </span>
                                                <span><a href="/">Delete</a></span>
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
                                                <span><a href="/">Edit</a></span>

                                                <span className="separator"> | </span>
                                                <span><a href="/">Delete</a></span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostList