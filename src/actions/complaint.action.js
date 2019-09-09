import ComplaintService from '../services/complaint.service';
import swal from 'sweetalert';

export const fetchComplaintList = () => {
    const list = dispatch => {
        ComplaintService.fetchComplaints()
            .then(data => {
                if (data) {
                    dispatch({
                        type: 'GET_COMPLAINT_LIST',
                        payload: data,
                        loading: false
                    })
                }
                return data;
            })
    }
    return list;
}
export const fetchAllComplaintsList = () => {
    const list = dispatch => {
        ComplaintService.fetchAllComplaints()
            .then(data => {
                if (data) {
                    dispatch({
                        type: 'GET_ALL_COMPLAINT_LIST',
                        payload: data,
                        loading: false
                    })
                }
                return data;
            })
    }
    return list;
}
export const createComplaint = (formData) => {
    const complaint = dispatch => {
        ComplaintService.createComplaint(formData)
            .then(data => {
                if (data) {
                    dispatch({
                        type: 'CREATE_COMPLAINT',
                        payload: data
                    })
                    swal({
                        title: "You SuccessFully submitted!",
                        icon: "success",
                    });
                }
                return data;
            })
    }
    return complaint;
}
export const changeComplaintStatus = (formData) => {
    const complaint = dispatch => {
        ComplaintService.changeComplaintStatus(formData)
            .then(data => {
                if (data) {
                    dispatch({
                        type: 'COMPLAINT_STATUS_CHANGE',
                        payload: data
                    })
                }
                return data;
            })
    }
    return complaint;
}
