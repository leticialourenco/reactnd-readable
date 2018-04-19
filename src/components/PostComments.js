import React, { Component } from "react";
import { connect } from "react-redux";
import * as commentActions from "../actions/Comments";
import moment from "moment/moment";
import FontAwesome from "react-fontawesome";

class PostComments extends Component {
    state = {
        author: "",
        body: ""
    };

    createComment = (event) => {
        event.preventDefault();

        const { author, body } = this.state;
        let parentId  = this.props.postId;

        this.setState({ author: "", body: "" });
        return this.props.actions.submitComment({ author, body, parentId })
    };

    handleDelete (comment) {
        this.props.actions.deleteComment(comment);
    };

    render () {
        const { comments } = this.props;

        const filteredComments = comments.filter(comment => !(comment.deleted));

        return (
            <div className="comments" id="comments">
                <h3>Comments
                    <span>({ filteredComments.length })</span>
                </h3>

                { filteredComments.map((comment) => (

                    <div className="comment" key={ comment.id }>
                        <div className="score-box">
                            <button>
                                <FontAwesome name='caret-up' />
                            </button>

                            <span className="score">
                                { comment.voteScore }
                            </span>

                            <button>
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
                            <span><a href="/">Edit</a></span>

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
                    onSubmit={ this.createComment }
                    className="comment-form"
                    id="comment-form"
                >
                    <label>Author</label>
                    <input
                        type="text"
                        value={ this.state.author }
                        onChange={ (event) => this.setState({ author: event.target.value }) }
                        spellCheck="false"
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
                            type="submit"
                            className="btn-default"
                        >
                            Publish Comment
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
            deleteComment: (comment) => dispatch(commentActions.deleteComment(comment))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);