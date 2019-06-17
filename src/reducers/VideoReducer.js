const initState = null;

export default function VideoReducer(state = initState, action) {
    switch (action.type) {
        case 'SET_VIDEO_SUCCESS':
            return {
                ...action.data,
            };
        default:
            return state;
    }
}