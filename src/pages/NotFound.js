import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="notFound">
            <div className="notFoundContent">
                <div className="wrapper">
                <h3>4</h3>
                <NavLink exact to="/">
                    <i className="fas fa-home"></i>
                </NavLink>
                <h3>4</h3>
                </div>
            </div>
        </div>
    );
};

export default NotFound;