import React from 'react';

function SearchBar(props) {
    return (
        <form onSubmit={props.handleSubmit} className='ui form' >
            <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" onChange={props.handleChange} placeholder="Search..." />
            </div>
        </form>
    )
};

export default SearchBar;