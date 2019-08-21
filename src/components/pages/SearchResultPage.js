import React from 'react';
import { useSelector } from "react-redux";
import SearchResultTemplate from '../Template/SearchResultTemplate';

function SearchResultPage(props) {
    const videosList = useSelector(state => state.SearchListReducer);
 return (
    <SearchResultTemplate videosList={videosList} width={"246px"} description={true}/>
    )
};
export default SearchResultPage;