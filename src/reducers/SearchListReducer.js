// const initState = {
//     kind: "youtube#searchListResponse",
//     etag: "",
//     nextPageToken: "",
//     prevPageToken: "",
//     pageInfo: {
//         totalResults: 0,
//         resultsPerPage: 0,
//     },
//     items: []
// }
const initState = [];

export default function SearchListReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_SEARCH_SUCCESS':
            return {
                ...state,
                ...action.data,
            };
        default:
            return state;
    }
}