export default (err: string|null, success: boolean, user: any|null) => {
    if (err && (! success)) {
        return {
            error: {
                info: `Error: ${err}`,
                message: err
            }
        };
    } else if (! success) {
        return {
            login: {
                success,
                error: {
                    info: `Error: ${err}`,
                    message: err
                }
            },
        };
    }

    return {
        login: {
            success
        },
        user: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            rut: user.rut,
            rutDv: user.rutDv
        }
    };
};