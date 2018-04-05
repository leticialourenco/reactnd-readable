import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

class PostListItem extends Component {
    render() {
        const { post } = this.props;

        return (
            <li className="post-item">
                <span className="score-box">
                    <button>
                        <FontAwesome name='caret-up' />
                    </button>

                    <span className="score">
                        { post.voteScore }
                    </span>

                    <button>
                        <FontAwesome name='caret-down' />
                    </button>
                </span>

                <Link to={`/${post.category}/${post.id}`}>
                    <span className="post-title">
                        { post.title }
                    </span>
                </Link>

                <hr/>

                <div className="post-info">
                    <span className="comment-counter">
                        { post.commentCount }
                    </span> comments
                    <span className="separator"> | </span>

                    <span className="timestamp">
                        { moment.unix(post.timestamp).format('MMMM DD, h:mm A') }
                    </span>
                    <span className="separator"> | </span>

                    by <span className="author">
                        { post.author }
                    </span>
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