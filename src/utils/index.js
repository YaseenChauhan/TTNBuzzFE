export const getToken = () => {
    return localStorage.getItem('token');
};

export const setToken = (token) => {
    return localStorage.setItem('token', token);
};

export const setUser = (user) => {
    return localStorage.setItem('user',user);
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));;
}