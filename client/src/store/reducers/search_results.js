const initialStore = [
    {
        id: 1,
        picture: { url: '/img/properties/house_00.jpg' },
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
        picture: { url: '/img/properties/house_01.jpg' }, // https://via.placeholder.com/250x180
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
        picture: { url: '/img/properties/house_02.jpg' }, // https://via.placeholder.com/250x180
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
        picture: { url: '/img/properties/house_03.jpg' }, // https://via.placeholder.com/250x180
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
        picture: { url: '/img/properties/house_04.jpg' }, // https://via.placeholder.com/250x180
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
        picture: { url: '/img/properties/house_05.jpg' }, // https://via.placeholder.com/250x180
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
