
import React from 'react';
import SearchBar from '../molecules/SearchBar'
function Header() {
    return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Title</span>
                    <div className="mdl-layout-spacer"></div>
                    <SearchBar/>
                </div>
            </header>
    )
};
export default Header;
