const initialState = {
    logged: false,
    user: {
        id: 'e7b75a472b65bc4a42e7b3f78833a4d00040beba796062bf7c13d9533b149e5ec3784813dc20348fdf248d28a2982df85b83d1109623bce45f08238f6ea9bd9bb5f406427b2a40f969802635b8907a0a57944f2c12f334bd081d5143a357c173a611e1b64a',
        firstName: 'alex',
        lastName: 'castro',
        rut: 12345678,
        rutDv: '9',
        role: 'default',
        email: 'email@email.com',
        status: 1
    }
};


const session = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN': 
            return {
                ...state,
                logged: true
            };
        case 'LOGOUT':
            return {
                ...state,
                logged: false
            };
        default:
            return state;
    }
}

export default session;
