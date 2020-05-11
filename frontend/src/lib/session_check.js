const is_authed = (err, dispatch) => {
    if (err === 'JsonWebTokenError' || err === 'TokenExpiredError') {
        dispatch({
            type: 'NO_PERMIT_AUTH'
        });
    }
}

export { is_authed };