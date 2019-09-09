import axiosInstance from '../config/axios';
import { getToken } from '../utils';
import swal from 'sweetalert';

class BuzzService {

    static fetchBuzzs() {
        const api = `/buzz`;
        const token = getToken();
        return axiosInstance.get(api, { headers: { "Authorization": token } })
            .then((result) => {
                return result.data.buzz
            })
            .catch((err) => {
                console.error(err);
            });
    }
    static fetchComments() {
        const api = `/buzz/comment`;
        const token = getToken();
        return axiosInstance.get(api, { headers: { "Authorization": token } })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }
    static createBuzz(formData) {
        const api = `/buzz`;
        const token = getToken();
        return axiosInstance.post(api, formData, {
            headers: {
                'Authorization': token
            }
        })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                swal({
                    title: "Oops! something went wrong!",
                    icon: "error",
                });
            });
    }
    static createComment(formData, buzzId) {
        const api = `/buzz/comment/` + buzzId;
        const token = getToken();
        return axiosInstance.post(api, formData, {
            headers: {
                'Authorization': token
            }
        })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                swal({
                    title: "Oops! something went wrong!",
                    icon: "error",
                });
            });
    }
    static likeBuzz(buzz) {
        const api = `/buzz/like/` + buzz._id;
        const token = getToken();
        return axiosInstance.post(api, buzz, {
            headers: {
                'Authorization': token
            }
        })
            .then((result) => {
                return result.data;
            })
            .catch((err) => {
                console.error(err);
            });
    }
}


export default BuzzService;