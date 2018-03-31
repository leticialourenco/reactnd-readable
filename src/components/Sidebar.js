import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import * as categoryActions from '../actions/Categories';

class Sidebar extends Component {
    componentWillMount () {
        this.props.actions.getCategories();
    }

    render() {
        const { actions, activeCategory } = this.props;
        const { categories } = this.props.categories;

        return (
            <div className="sidebar col-md-2">
                <ul className="category-list">
                    <li>
                        <Link to="/"
                              onClick={() => actions.setCategory(null)}
                              className={ activeCategory === null ? 'active' : '' }
                        >
                            <FontAwesome name='home' />All Posts
                        </Link>
                    </li>

                    { categories.map( (category) => (
                        <li key={category.path} className={category.path}>
                            <Link
                                to={`/${category.path}`}
                                onClick={ () => actions.setCategory(category) }
                                className={ category.path === activeCategory ? 'active' : '' }
                            >

                                <FontAwesome name='caret-right'/>
                                { category.name }
                            </Link>
                        </li>
                    )) }
                </ul>

                <div className="footer">
                    <a href="https://github.com/leticialourenco/reactnd-readable"
                       target="_blank"
                       rel="noopener noreferrer"
                    ><FontAwesome name="github"/></a>

                    <a href="https://leticialourenco.com"
                       target="_blank"
                       rel="noopener noreferrer"
                    ><FontAwesome name="dribbble"/></a>

                    <br/>
                    by Leticia Lourenco
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        categories: state.categories,
        activeCategory: state.activeCategory
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: {
            getCategories: () => dispatch(categoryActions.getCategories()),
            setCategory: (category) => dispatch(categoryActions.setCategory(category ? category.path : null))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);