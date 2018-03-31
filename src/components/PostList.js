import React, { Component } from 'react';
import { connect } from "react-redux";
import Sidebar from './Sidebar';
import PostListItem from "./PostListItem";
import * as postActions from '../actions/Posts';
import * as categoryActions from '../actions/Categories';
import FontAwesome from 'react-fontawesome';

class PostList extends Component {
    componentWillMount () {
        this.props.actions.getPosts();
    }

    render() {
        const { posts } = this.props;

        return (
            <div>
                <div className="content wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar/>

                            <main className="posts col-sm-12 col-md-10">
                                <div className="row sorting-header">
                                    <div className="col-md-10 col-lg-9">
                                        <ul>
                                            <li>
                                                <FontAwesome name='sort' />
                                                <span>Sort By</span>
                                            </li>
                                            <li><a href="/" className="active">Newest</a></li>
                                            <li><a href="/">Oldest</a></li>
                                            <li><a href="/">Highest Rated</a></li>
                                            <li><a href="/">Lowest Rated</a></li>
                                        </ul>
                                    </div>

                                    <div className="col-md-2 col-lg-3 results-counter">
                                        <span>235</span> results
                                    </div>
                                </div>

                                <div className="post-list-container">
                                    <ul>
                                        <PostListItem key={"post.id"} post={"post"} />
                                    </ul>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        posts: state.posts,
        activeCategory: state.activeCategory
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            getPosts: () => dispatch(postActions.getPosts()),
            setCategory: (category) => dispatch(categoryActions.setCategory(category ? category.path : null))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);