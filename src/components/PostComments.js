import React, { Component } from "react";
import { connect } from "react-redux";
import * as commentActions from "../actions/Comments";
import moment from "moment/moment";
import FontAwesome from "react-fontawesome";

class PostComments extends Component {
    state = {
        author: "",
        body: "",
        id: ""
    };

    createComment = (event) => {
        event.preventDefault();

        const { author, body } = this.state;
        let parentId  = this.props.postId;

        this.setState({ author: "", body: "" });
        return this.props.actions.submitComment({ author, body, parentId })
    };

    addDataToForm = (comment) => {
        this.setState({
            author: comment.author,
            body: comment.body,
            id: comment.id
        });

        let authorInput = document.getElementById("authorInput");
        authorInput.classList.add("disabled");
        authorInput.disabled = true;

        let editButton = document.getElementById("editButton");
        editButton.style.display = "block";

        let createButton = document.getElementById("createButton");
        createButton.style.display = "none";
    };

    editComment = (event) => {
        event.preventDefault();

        let authorInput = document.getElementById("authorInput");
        authorInput.classList.remove("disabled");
        authorInput.disabled = false;

        let editButton = document.getElementById("editButton");
        editButton.style.display = "none";

        let createButton = document.getElementById("createButton");
        createButton.style.display = "block";

        this.setState({ author: "", body: "" });
        return this.props.actions.editComment(this.state);
    };

    handleDelete (comment) {
        this.props.actions.deleteComment(comment);
    };

    render () {
        const { comments, actions } = this.props;

        const filteredComments = comments.filter(comment => !(comment.deleted));

        return (
            <div className="comments" id="comments">
                <h3>Comments
                    <span>({ filteredComments.length })</span>
                </h3>

                { filteredComments.map((comment) => (

                    <div className="comment" key={ comment.id }>
                        <div className="score-box">
                            <button
                                onClick={ () => actions.voteComment(comment, 'upVote') }
                            >
                                <FontAwesome name='caret-up' />
                            </button>

                            <span className="score">
                                { comment.voteScore }
                            </span>

                            <button
                                onClick={ () => actions.voteComment(comment, 'downVote') }
                            >
                                <FontAwesome name='caret-down' />
                            </button>
                        </div>

                        <div className="comment-info">
                            <span className="timestamp">
                                { moment(comment.timestamp).format('MMMM DD, YY') }
                            </span>

                            <span className="separator"> | </span>
                            by <span className="author">
                                { comment.author }
                            </span>

                            <span className="separator"> | </span>
                            <button onClick={ () => this.addDataToForm(comment) }>
                                Edit
                            </button>

                            <span className="separator"> | </span>
                            <button onClick={ () => this.handleDelete(comment) } >
                                Delete
                            </button>
                        </div>

                        <div className="comment-body">
                            <p>
                                { comment.body }
                            </p>
                        </div>
                    </div>
                ))}

                <h3>Leave your comment</h3>

                <form
                    className="comment-form"
                    id="comment-form"
                >
                    <label>Author</label>
                    <input
                        type="text"
                        value={ this.state.author }
                        onChange={ (event) => this.setState({ author: event.target.value }) }
                        spellCheck="false"
                        id="authorInput"
                    />

                    <label>Text</label>
                    <textarea
                        rows="5"
                        spellCheck="false"
                        value={ this.state.body }
                        onChange={ (event) => this.setState({ body: event.target.value }) }
                    />

                    <div className="btn-container">
                        <button
                            onClick={ this.createComment }
                            type="submit"
                            className="btn-default"
                            id="createButton"
                        >
                            Publish Comment
                        </button>

                        <button
                            onClick={ this.editComment }
                            type="submit"
                            className="btn-default"
                            id="editButton"
                            style={{ display: 'none' }}
                        >
                            Save Comment
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            submitComment: (properties) => dispatch(commentActions.submitComment(properties)),
            editComment: (comment) => dispatch(commentActions.editComment(comment)),
            voteComment: (comment, option) => dispatch(commentActions.voteComment(comment, option)),
            deleteComment: (comment) => dispatch(commentActions.deleteComment(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);