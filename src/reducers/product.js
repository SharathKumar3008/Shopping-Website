const productDefaultState = [
    {
        id: 1,
        name: "Test Product 1",
        sku: "TEST001",
        image: "https://i.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U"
    },
    {
        id: 2,
        name: "Test Product 2",
        sku: "TEST002",
        image: "https://i.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U"
    },
    {
        id: 3,
        name: "Test Product 3",
        sku: "TEST003",
        image: "https://i.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U"
    },
    {
        id: 4,
        name: "Test Product 4",
        sku: "TEST004",
        image: "https://i.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U"
    },
    {
        id: 5,
        name: "Test Product 5",
        sku: "TEST005",
        image: "https://i.picsum.photos/id/85/200/200.jpg?hmac=gQRdT-HPw1azaNf38WLW_QZv7aC0WjwOSM4Sf5kWm3U"
    },
];

const productReducer = (state=productDefaultState, action) => {
    return state;
}

export default productReducer;