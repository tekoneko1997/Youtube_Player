const initState = {
    kind: "youtube#searchListResponse",
    etag: "",
    nextPageToken: "",
    prevPageToken: "",
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
    },
    items: []
}

export default function SearchListReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_SEARCH_SUCCESS':
            return {
                ...action.data,
                items:[...state.items, ...action.data.items]
            };
        default:
            return state;
    }
}