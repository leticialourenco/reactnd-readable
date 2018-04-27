import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';

import * as postActions from '../actions/Posts';

import moment from 'moment';
import FontAwesome from 'react-fontawesome';

class PostListItem extends Component {

    handleDelete (post) {
        this.props.actions.deletePost(post);

        if (this.props.singlePostPage) {
            window.location.replace('/');
        }
    }

    render() {
        const { post, actions, singlePostPage } = this.props;

        const commentsHashLink = singlePostPage ? (
            <span>
            </span>
        ) : (
            <span>
                <HashLink to={`/${post.category}/${post.id}#comments`}>
                    <span className="comment-counter">
                        { post.commentCount }
                    </span> comments
                </HashLink>

                <span className="separator"> | </span>
            </span>
        );

        return (
            <li className="post-item">
                <span className="score-box">
                    <button
                        onClick={ () => actions.votePost(post, 'upVote') }
                    >
                        <FontAwesome name='caret-up' />
                    </button>

                    <span className="score">
                        { post.voteScore }
                    </span>

                   <button
                       onClick={ () => actions.votePost(post, 'downVote') }
                   >
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
                    { commentsHashLink }

                    <span className="timestamp">
                        { moment(post.timestamp).format('MMMM DD, YY') }
                    </span>
                    <span className="separator"> | </span>

                    by <span className="author">
                        { post.author }
                    </span>
                    <span className="separator"> | </span>

                    <span>
                        <Link to={`/${post.category}/${post.id}/edit`}>
                            Edit
                        </Link>
                    </span>
                    <span className="separator"> | </span>

                    <span>
                        <button onClick={ () => this.handleDelete(post) } >
                            Delete
                        </button>
                    </span>
                </div>
            </li>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            votePost: (post, option) => dispatch(postActions.votePost(post, option)),
            deletePost: (post) => dispatch(postActions.deletePost(post))
        }
    }
}

export default connect('', mapDispatchToProps)(PostListItem)