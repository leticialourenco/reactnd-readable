import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Sidebar from "./Sidebar";

class PostSingle extends Component {
    render() {
        return (
            <div className="content single-post wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar/>

                        <main className="posts post-item col-sm-12 col-md-10">
                            <span className="score-box">
                                <button>
                                    <FontAwesome name='caret-up' />
                                </button>

                                <span className="score">405</span>

                                <button>
                                    <FontAwesome name='caret-down' />
                                </button>
                            </span>

                            <a className="post-title">
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            </a>

                            <hr/>

                            <div className="post-info">
                                <span className="timestamp">3 hours ago</span>
                                <span className="separator"> | </span>

                                by <span className="author">Rapha Draccon</span>
                                <span className="separator"> | </span>
                                <span><a href="/">Edit</a></span>
                                <span className="separator"> | </span>
                                <span><a href="/">Delete</a></span>
                            </div>

                            <hr/>

                            <div className="post-text">
                                <p>
                                    Here is a mystery which perhaps reddit can solve. When I was a child (late 90's, early 2000's), I remember finding a documentary called 'Extreme Sculpture' on a channel such as the history or science channel (I'm from the UK and can't remember exactly, but it was on Sky digital). It was about half an hour long and by the end of it I was crying with laughter for reasons wholly unintended by the producers.
                                </p><p>
                                    The documentary followed a ludicrously posh British man in safari gear prancing around Kenya (pronounced 'Keenya'), aiming to make sculptures of various animals. I remember him using singular forms of nouns to describe species (which is technically correct but sounds odd to my ears): "Ever since I was a child, I've always loved elephant and lion", and a particularly engrossing scene when he was on his knees sniffing a pile of elephant dung and really getting into it.
                                </p><p>
                                    I promise you that it was hilarious and would be a treasure trove of found footage however I can't find any reference to it online. I absolutely swear I didn't dream it up. So, did anyone else see this documentary or have any idea where I could go to find it again?
                                </p>
                            </div>

                            <div className="comments">
                                <h3>Comments
                                    <span>(12)</span>
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
                                        Publish Post
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

export default PostSingle