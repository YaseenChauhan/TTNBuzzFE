import axiosInstance from '../config/axios';
import { setToken, getToken, setUser } from '../utils';
class AuthService {
    static fetchLoginInfo = data => {
        const api = `/users/google/OAuth/`;
        const token = {
            access_token: data.accessToken
        }
        return axiosInstance.post(api, token)
            .then(result => {
                setUser(JSON.stringify(result.data.user))
                setToken(result.data.Token);
                return result.data;
            })
            .catch(err => console.log(err));
    }
    static fetchUserDetails = data => {
        const api = `/users/user/`;
        const token = getToken();
        return axiosInstance.get(api, {
            headers: {
                'Authorization': token
            }
        })
            .then(result => {
                return result.data.data
            })
            .catch(err => console.log(err));
    }
    static isAuthenticated() {
        const token = getToken();
        if (token) {
            this.authenticated = true;
        }
        return this.authenticated;
    }
}
export default AuthService;