import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class PostListItem extends Component {
    render() {

        return (
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
                    <span className="post-title">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    </span>
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
        )
    }
}

export default PostListItem;