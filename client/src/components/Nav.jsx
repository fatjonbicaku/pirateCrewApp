import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    const { link, route } = props;

    return (
        <div className="navBar">
            <h1> My Pirate Crew </h1>
            <Link to={route}>{link}</Link>
        </div>
    )
}

export default Nav;
