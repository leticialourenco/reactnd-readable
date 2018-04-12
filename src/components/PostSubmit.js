import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as postActions from "../actions/Posts";
import FontAwesome from 'react-fontawesome';
import * as categoryActions from "../actions/Categories";

class SubmitPost extends Component {
    state = {
        title: "",
        author: "",
        category: "",
        body: ""
    };

    createPost = (event) => {
        event.preventDefault();

        return this.props.actions.submitPost(this.state)
            .then(response => this.redirectToPost(response.post.category, response.post.id));
    };

    redirectToPost = (category, id) => {
        this.props.history.push(`/${category}/${id}`);
    };

    componentWillMount () {
        this.props.actions.getCategories();
    }

    render() {
        const { categories } = this.props.categories;

        return (
            <div>
                <div className="content post-submit wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 card card-info">
                                <h1>Submit Post</h1>

                                <p> You are submitting a text-based post.
                                    Feel free to speak your mind.
                                    A title is required, but expanding further in the text field is not.
                                    Remember to select the category that would better fit into your post's subject.
                                </p>
                            </div>

                            <div className="col-md-7 card card-form">
                                <form onSubmit={ this.createPost }>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={ this.state.title }
                                        onChange={ (event) => this.setState({ title: event.target.value }) }
                                    />

                                    <label>Author</label>
                                    <input
                                        type="text"
                                        value={ this.state.author }
                                        onChange={ (event) => this.setState({ author: event.target.value }) }
                                    />

                                    <label> Category
                                        <FontAwesome name="caret-down" />
                                    </label>
                                    <select name="category"
                                        value={ this.state.category }
                                        onChange={ (event) => this.setState({ category: event.target.value }) }>

                                        <option value="" disabled> </option>

                                        {   categories.map((category) => (
                                            <option key={ category.path } value={ category.path }>{ category.name }</option>
                                        ))}
                                    </select>

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
                                            Publish Post
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
        categories: state.categories
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            getCategories: () => dispatch(categoryActions.getCategories()),
            submitPost: (properties) => dispatch(postActions.submitPost(properties))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitPost))