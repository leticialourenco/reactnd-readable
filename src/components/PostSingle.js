import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostListItem from "./PostListItem";
import * as postActions from "../actions/Posts";
import * as categoryActions from "../actions/Categories";
import FontAwesome from 'react-fontawesome';

class PostSingle extends Component {

    componentWillMount () {
        this.props.actions.getPost(this.props.postId);
        this.props.actions.setCategory(this.props.category);
    }

    render() {
        const { post } = this.props;

        return (
            <div className="content single-post wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />

                        <main className="posts col-sm-12 col-md-10">

                            <PostListItem post={post} />

                            <hr/>

                            <div className="post-text">
                                <p>{ post.body }</p>
                            </div>

                            <div className="comments">
                                <h3>Comments
                                    <span>({ post.commentCount })</span>
                                </h3>

                                <div className="comment">
                                    <div className="score-box">
                                        <button>
                                            <FontAwesome name='caret-up' />
                                        </button>

                                        <span className="score">405</span>

                                        <button>
                                            <FontAwesome name='caret-down' />
                                        </button>
                                    </div>

                                    <div className="comment-info">
                                        <span className="timestamp">3 hours ago</span>
                                        <span className="separator"> | </span>
                                        by <span className="author">Rapha Draccon</span>
                                        <span className="separator"> | </span>
                                        <span><a href="/">Edit</a></span>
                                        <span className="separator"> | </span>
                                        <span><a href="/">Delete</a></span>
                                    </div>

                                    <div className="comment-body">
                                        <p>
                                            The documentary followed a ludicrously posh British man in safari gear prancing around Kenya (pronounced 'Keenya'), aiming to make sculptures of various animals. I remember him using singular forms of nouns to describe species (which is technically correct but sounds odd to my ears): "Ever since I was a child, I've always loved elephant and lion", and a particularly engrossing scene when he was on his knees sniffing a pile of elephant dung and really getting into it.
                                        </p>
                                    </div>
                                </div>

                                <h3>Leave your comment</h3>

                                <textarea name="" id="" rows="5"></textarea>

                                <div className="btn-container">
                                    <button className="btn-default">
                                        Publish Comment
                                    </button>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        post: state.post,
        activeCategory: state.activeCategory
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            getPost: (postId) => dispatch(postActions.getPost(postId)),
            setCategory: (category) => dispatch(categoryActions.setCategory(category))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSingle))
