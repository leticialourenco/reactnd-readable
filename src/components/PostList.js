import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import PostListItem from './PostListItem';
import * as postActions from '../actions/Posts';
import * as categoryActions from '../actions/Categories';
import FontAwesome from 'react-fontawesome';

class PostList extends Component {
    componentWillMount () {
        this.props.actions.getPosts();
        this.props.actions.setCategory();
    }

    render() {
        const { posts, activeCategory } = this.props;

        const filteredPosts = posts.filter(post =>
            (activeCategory === null) || (post.category === activeCategory));

        return (
            <div>
                <div className="content wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <Sidebar/>

                            <main className="posts col-sm-12 col-md-10">
                                { (filteredPosts.length > 0)?
                                    <div>
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
                                                <span>{ filteredPosts.length }</span> results
                                            </div>
                                        </div>

                                        <div className="post-list-container">
                                            <ul>
                                                { filteredPosts.map((post) => (
                                                    <PostListItem key={post.id} post={post} />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    :

                                    <div>
                                        <p className="post-item">
                                            Sorry, no results found in
                                            <span className="highlight"> { activeCategory }</span>.
                                            Start your own thread under this category.
                                        </p>

                                        <p className="post-item">
                                            <Link to={'/submit'} className="btn-default">
                                                Post Something
                                            </Link>
                                        </p>
                                    </div>
                                    }
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