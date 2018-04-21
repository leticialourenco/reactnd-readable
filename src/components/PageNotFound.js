import React from 'react';
import Sidebar from './Sidebar';
import FontAwesome from 'react-fontawesome';

function PageNotFound (type) {
    return (
        <div className="content single-post wrapper">
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <main className="posts col-sm-12 col-md-10">
                        <p className="post-item">
                            <button
                                className="btn btn-primary"
                            >
                                <FontAwesome name='caret-left'/>
                                Back
                            </button>

                            { (type.type === "post") ?
                                <span>Sorry, the post you are trying to find either doesn't exist or has been deleted.</span>
                                :
                                <span>Sorry, no results found here.</span>
                            }
                        </p>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;