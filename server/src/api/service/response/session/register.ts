export default (err: any, success: boolean, user: any) => {
    return {
        error: err,
        success,
        user
    };
};