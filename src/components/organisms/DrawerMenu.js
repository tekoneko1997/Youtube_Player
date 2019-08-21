import React from 'react';
import { Link } from 'react-router-dom'
function DrawerMenu() {
    return (
        <div className="mdl-layout__drawer">
            <span className="mdl-layout-title"> Menu</span>
            <nav className="mdl-navigation">
                <Link className="mdl-navigation__link" to='/'>Home</Link>
                <Link className="mdl-navigation__link" to="/">Link</Link>
                <Link className="mdl-navigation__link" to="/">Link</Link>
                <Link className="mdl-navigation__link" to="/">Link</Link>
            </nav>
        </div>
    )
};
export default DrawerMenu;
