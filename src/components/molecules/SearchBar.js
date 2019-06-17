import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getSearchRequest } from '../../actions/SearchAction';

function SearchBar() {
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
        <form onSubmit={handleSubmit} className='ui form' >
            <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" onChange={handleChange} placeholder="Search..." />
            </div>
        </form>
    )
};

export default SearchBar;