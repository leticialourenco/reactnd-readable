import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostListItem from "./PostListItem";
import PostComments from "./PostComments";
import * as postActions from "../actions/Posts";
import * as categoryActions from "../actions/Categories";
import * as commentActions from "../actions/Comments";

class PostSingle extends Component {

    componentWillMount () {
        this.props.actions.getPost(this.props.postId);
        this.props.actions.setCategory(this.props.category);
        this.props.actions.getComments(this.props.postId);
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

                            <PostComments />
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
        activeCategory: state.activeCategory,
        comments: state.comments
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            getPost: (postId) => dispatch(postActions.getPost(postId)),
            setCategory: (category) => dispatch(categoryActions.setCategory(category)),
            getComments: (postId) => dispatch(commentActions.getComments(postId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSingle))
