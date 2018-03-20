import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar col-md-2">
                <ul className="category-list">
                    <li><a href="/">
                        <FontAwesome name='home' />All Posts
                    </a></li>

                    <li><a href="/">
                        <FontAwesome name='globe' />React
                    </a></li>

                    <li><a href="/" className="active">
                        <FontAwesome name='cog' />Redux
                    </a></li>

                    <li><a href="/">
                        <FontAwesome name='compass' />Udacity
                    </a></li>
                </ul>

                <div className="footer">
                    <a href="https://github.com/leticialourenco/reactnd-readable" target="_blank">
                        <FontAwesome name="github"/>
                    </a>
                    <a href="https://leticialourenco.com" target="_blank">
                        <FontAwesome name="dribbble"/>
                    </a>
                    <br/>
                    by Leticia Lourenco
                </div>
            </div>
        )
    }
}

export default Sidebar