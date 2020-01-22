export default {
    error: (error: any) => {
        return {
            error
        };
    },
    noSession: () => {
        return {
            error: {
                info: 'Error: login first',
                message: ''
            }
        }
    },
};