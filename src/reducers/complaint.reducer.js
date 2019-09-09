const initialState = {
    allComplaintsList: [],
    complaintList: [],
    loading: true
}
const complaintReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMPLAINT_LIST':
            return {
                ...state,
                complaintList: action.payload,
                loading: action.loading
            }
        case 'GET_ALL_COMPLAINT_LIST':
            return {
                ...state,
                allComplaintsList: action.payload,
                loading: action.loading
            }
        case 'CREATE_COMPLAINT':
            const data = action.payload;
            let complaintList = [...state.complaintList];
            let allComplaintsList = [...state.allComplaintsList];
            complaintList.unshift(data);
            allComplaintsList.unshift(data);
            return {
                ...state,
                complaintList,
                allComplaintsList
            }
            case 'COMPLAINT_STATUS_CHANGE': {
            const updatedData = action.payload;
            const complaintList = [...state.complaintList];
            const allComplaintsList = [...state.allComplaintsList];
            complaintList.unshift(updatedData);
            allComplaintsList.unshift(updatedData);
            return {
                ...state,
                complaintList,
                allComplaintsList
            }
        }
        default : return state;
    }
}
export default complaintReducer;