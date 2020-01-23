const initialStore = [
    {
        id: 1,
        picture: { url: '/img/property_00.png' },
        property: {
            type: 'house',
            status: 'Sell',
            price: 273000000,
            direction: {
                maps: '',
                number: 5104,
                street: 'Kendlewood',
                city: 'McAllen',
                state: 'Texas',
                country: 'USA',
            },
            beds: 2,
            rooms: 5,
            baths: 2,
        },
        post: {
            time: 'today',
        }
    },
    {
        id: 2,
        picture: { url: '/img/property_00.png' }, // https://via.placeholder.com/250x180
        property: {
            type: 'house',
            status: 'Sell',
            price: 273000000,
            direction: {
                maps: '',
                number: 5104,
                street: 'Kendlewood',
                city: 'McAllen',
                state: 'Texas',
                country: 'USA',
            },
            beds: 2,
            rooms: 5,
            baths: 2,
        },
        post: {
            time: 'today',
        }
    },
];


const search_results = (store = initialStore, action) => {
    switch(action.type) {
        case '??':
            return store;
        case '?':
            return store;
        default:
            return store;
    }
}

export default search_results;
