const initialState = {
    buzzList: [],
    commentsList: [],
    loading: true
}
const buzzReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BUZZ_LIST':
            return {
                ...state,
                buzzList: action.payload,
                loading: action.loading
            }
        case 'CREATE_BUZZ':
            const data = action.payload;
            const buzzList = [...state.buzzList];
            buzzList.unshift(data);
            return {
                ...state,
                buzzList
            }
        case 'GET_COMMENT_LIST':
            return {
                ...state,
                commentsList: action.payload
            }
        case 'CREATE_COMMENT': {
            const data = action.payload;
            const commentsList = [...state.commentsList];
            commentsList.unshift(data);
            return {
                ...state,
                commentsList
            }
        }
        default: return state;
    }
   
}

export default buzzReducer;