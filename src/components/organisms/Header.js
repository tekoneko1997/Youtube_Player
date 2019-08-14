
import React, { useState } from 'react';
import SearchBar from '../molecules/SearchBar'
import { useDispatch } from "react-redux";
import { getSearchRequest } from '../../actions/SearchAction';

function Header() {
    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getSearchRequest(term))
    }
    return (
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Youtube Player</span>
                    <div className="mdl-layout-spacer"></div>
                    <SearchBar handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
            </header>
    )
};
export default Header;
