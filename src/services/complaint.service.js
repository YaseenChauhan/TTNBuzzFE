import axiosInstance from '../config/axios';
import { getToken } from '../utils';
import swal from 'sweetalert';

class ComplaintService {

    static fetchComplaints() {
        const api = '/complaint/user';
        const token = getToken();
        return axiosInstance.get(api, { headers: { 'Authorization': token } })
            .then(response => {
                return response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
    static fetchAllComplaints() {
        const api = '/complaint';
        const token = getToken();
        return axiosInstance.get(api, { headers: { 'Authorization': token } })
            .then(response => {
                return response.data.complaint;
            })
            .catch(error => {
                console.log(error);
            })
    }
    static createComplaint(formData) {
        const api = '/complaint';
        const token = getToken();
        return axiosInstance.post(api, formData, {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                swal({
                    title: "Oops! something went wrong!",
                    icon: "error",
                });
                console.log(error);
            })
    }
    static changeComplaintStatus(formData) {
        const api = '/complaint/' + formData._id;
        const token = getToken();
        return axiosInstance.patch(api, formData, {
            headers: {
                'Authorization': token
            }
        })
            .then(response => {
                return response.data.data;
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default ComplaintService;