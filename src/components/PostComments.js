import React, { Component } from "react";
import { connect } from "react-redux";
import FontAwesome from "react-fontawesome";
import moment from "moment/moment";

class PostComments extends Component {
    render () {
        const { comments } = this.props;
        console.log(comments);
        return (
            <div className="comments">
                <h3>Comments
                    <span>({ comments.length })</span>
                </h3>

                { comments.map((comment) => (
                    <div className="comment" key={comment.id}>
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
                                { moment.unix(comment.timestamp).format('MMMM DD, h:mm A') }
                            </span>

                            <span className="separator"> | </span>
                            by <span className="author">
                                { comment.author }
                            </span>

                            <span className="separator"> | </span>
                            <span><a href="/">Edit</a></span>

                            <span className="separator"> | </span>
                            <span><a href="/">Delete</a></span>
                        </div>

                        <div className="comment-body">
                            <p>
                                { comment.body }
                            </p>
                        </div>
                    </div>
                ))}

                <h3>Leave your comment</h3>

                <textarea name="" id="" rows="5"></textarea>

                <div className="btn-container">
                    <button className="btn-default">
                        Publish Comment
                    </button>
                </div>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostComments);