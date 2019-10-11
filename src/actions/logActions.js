import { GET_LOGS , SET_LOADING, LOGS_ERROR } from './types';

// redux thunk allows us to return a function directly
// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     };
// };

export const getLogs = () => asynch dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
};

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};