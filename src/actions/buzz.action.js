import BuzzService from '../services/buzz.service';
import swal from 'sweetalert';
export const fetchBuzzList = () => {
    const list = dispatch => {
        BuzzService.fetchBuzzs().then((response) => {
            if (response) {
                dispatch({
                    type: 'GET_BUZZ_LIST',
                    payload: response,
                    loading: false
                });
            }
            return response;
        })
    };

    return list;
};
export const fetchCommentList = () => {
    const list = dispatch => {
        BuzzService.fetchComments().then((response) => {
            if (response) {
                dispatch({
                    type: 'GET_COMMENT_LIST',
                    payload: response
                });
            }
            return response;
        })
    };

    return list;
};
export const createBuzz = (formData) => {
    const buzz = dispatch => {
        BuzzService.createBuzz(formData)
            .then(response => {
                if (response) {
                    swal({
                        title: "You SuccessFully submittted!",
                        icon: "success",
                    });
                    dispatch({
                        type: 'CREATE_BUZZ',
                        payload: response
                    })
                }
                return response;
            })
    }
    return buzz;
}
export const createComment = (formData, buzzId) => {
    const buzz = dispatch => {
        BuzzService.createComment(formData, buzzId)
            .then(response => {
                if (response) {
                    dispatch({
                        type: 'CREATE_COMMENT',
                        payload: response
                    })
                }
                return response;
            })
    }
    return buzz;
}