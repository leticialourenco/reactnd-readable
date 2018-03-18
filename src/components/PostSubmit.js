import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class SubmitPost extends Component {
    render() {
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
                                <form>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        onChange={""}
                                    />

                                    <label>Author</label>
                                    <input
                                        type="text"
                                        onChange={""}
                                    />

                                    <label>
                                        Category
                                        <FontAwesome
                                            name="caret-down"
                                        />
                                    </label>
                                    <select name="" id="">
                                        <option value=""></option>

                                        <option value="Redux">
                                            Redux
                                        </option>

                                        <option value="React">
                                            React
                                        </option>

                                        <option value="Udacity">
                                            Udacity
                                        </option>
                                    </select>

                                    <label>Text</label>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        spellcheck="false"
                                    />
                                    <div className="btn-container">
                                        <button className="btn-default">
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

export default SubmitPost