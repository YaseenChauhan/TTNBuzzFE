import AuthService from '../services/auth.service';

export const fetchLoginInfo = (data) => {
    const user = dispatch => {
        return AuthService.fetchLoginInfo(data)
            .then((response) => {
                if (response) {
                    dispatch({
                        type: 'SET_LOGIN_INFO',
                        payload: response.user,
                        isAuthenticated: true
                    });
                }
                return response;
            })
    };

    return user;
};
export const fetchUserDetails = (data) => {
    const user = dispatch => {
        return AuthService.fetchUserDetails(data)
            .then((response) => {
                if (response) {
                    dispatch({
                        type: 'SET_USER_INFO',
                        payload: response,
                        isAuthenticated: true
                    });
                }
                return response;
            })
    };

    return user;
};