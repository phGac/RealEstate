const initialState = {
    searched: 'santiago',
    property: {
        type: 'house',
        price: {
            min: '50000',
            max: '',
        },
        rooms: {
            min: '',
            max: '',
        },
        beds: {
            min: '2',
            max: '',
        }
    },
    direction: {
        country: 'chile',
        state: '',
        region: 'metropolitana',
        commune: '',
    },
    results: {
        count: {
            total: '351'
        }
    }
};


const search = (store = initialState, action) => {
    switch(action.type) {
        case '??':
            return store;
        case '?':
            return store;
        default:
            return store;
    }
}

export default search;
