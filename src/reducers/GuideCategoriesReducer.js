const initState = {
    kind: "youtube#guideCategoryListResponse",
    etag: "",
    nextPageToken: "",
    prevPageToken: "",
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
    },
    items: []
}

export default function GuideCategoriesReducer(state = initState, action) {
    switch (action.type) {
        case 'GET_GUIDE_CATEGORIES_SUCCESS':
            return {
                ...action.data,
            };
        default:
            return state;
    }
}