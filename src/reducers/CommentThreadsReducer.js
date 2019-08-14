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

export default function CommentThreadsReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_COMMENT_THREADS_SUCCESS':
            return {
                ...action.data,
            };
        default:
            return state;
    }
}