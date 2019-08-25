import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import SearchResultTemplate from '../Template/SearchResultTemplate';
import useInfiniteScroll from '../../functions/useInfiniteScroll';
import { getSearchRequest } from '../../actions/SearchAction';

function SearchResultPage(props) {
    const videosList = useSelector(state => state.SearchListReducer);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
    const dispatch = useDispatch();
    var prevPageToken = "";
    let query = null;
    if (props.location.pathname === "/SearchResult") {
        let params = new URLSearchParams(props.location.search);
        query = params.get("search_query");
    }

    function fetchMoreListItems() {
        setTimeout(() => {
            if (prevPageToken !== videosList.nextPageToken) {
                prevPageToken = videosList.nextPageToken
                dispatch(getSearchRequest(query,　videosList.nextPageToken));
            }
            setIsFetching(false);
        }, 100);
    }

 return (
    <SearchResultTemplate videosList={videosList} width={"246px"} description={true}　query={query} isFetching={isFetching}/>
    )
};
export default SearchResultPage;