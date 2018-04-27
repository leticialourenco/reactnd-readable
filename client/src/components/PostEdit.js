import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as postActions from "../actions/Posts";
import FontAwesome from 'react-fontawesome';

class PostEdit extends Component {
    state = {
        title: "",
        author: "",
        category: "",
        body: "",
        id: ""
    };

    addDataToForm = () => {
        const { post } = this.props;

        this.setState({
            title: post.title,
            author: post.author,
            category: post.category,
            body: post.body,
            id: post.id
        });
    };

    editPost = (event) => {
        event.preventDefault();

        return this.props.actions.editPost(this.state)
            .then(response => this.redirectToPost(response.post.category, response.post.id));
    };

    redirectToPost = (category, id) => {
        this.props.history.push(`/${category}/${id}`);
    };

    componentWillMount () {
        this.props.actions.getPost(this.props.postId)
            .then(this.addDataToForm);
    }

    render() {
        return (
            <div>
                <div className="content post-submit post-edit wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2"> </div>
                            <div className="col-lg-8 card card-info">
                                <h1>Edit Post</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2"> </div>
                            <div className="col-lg-8 card card-form">
                                <form onSubmit={ this.editPost }>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={ this.state.title }
                                        onChange={ (event) => this.setState({ title: event.target.value }) }
                                        spellCheck="false"
                                    />

                                    <label>Author</label>
                                    <input
                                        type="text"
                                        value={ this.state.author }
                                        className="disabled"
                                        spellCheck="false"
                                    />

                                    <label> Category
                                        <FontAwesome name="caret-down" />
                                    </label>
                                    <input
                                        type="text"
                                        value={ this.state.category }
                                        className="disabled"
                                        spellCheck="false"
                                    />

                                    <label>Text</label>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        spellCheck="false"
                                        value={this.state.body}
                                        onChange={ (event) => this.setState({ body: event.target.value }) }
                                    />

                                    <div className="btn-container">
                                        <button
                                            type="submit"
                                            className="btn-default"
                                        >
                                            Save & Publish
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        post: state.post
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            editPost: (post) => dispatch(postActions.editPost(post)),
            getPost: (postId) => dispatch(postActions.getPost(postId))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostEdit))