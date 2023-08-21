const state = () => ({
    all: [
        {
            id: 'note-book-mockup',
            name: 'Note Book Mockup',
            price: 455.00,
            oldPrice: 459.99,
            sale: false,
            image: require('~/assets/images/products/products-img1.jpg'),
        },
        {
            id: 'motivational-book-cover',
            name: 'Motivational Book Cover',
            price: 541.00,
            oldPrice: 540.99,
            sale: true,
            image: require('~/assets/images/products/products-img2.jpg'),
        },
        {
            id: 'book-cover-softcover',
            name: 'Book Cover Softcover',
            price: 140.00,
            oldPrice: 149.99,
            sale: false,
            image: require('~/assets/images/products/products-img3.jpg'),
        },
        {
            id: 'stop-and-take-a-second',
            name: 'Stop and Take a Second',
            price: 180.00,
            oldPrice: 199.99,
            sale: false,
            image: require('~/assets/images/products/products-img4.jpg'),
        },
        {
            id: 'real-life-fairytale',
            name: 'Real Life Fairytale',
            price: 180.00,
            oldPrice: 199.99,
            sale: false,
            image: require('~/assets/images/products/products-img5.jpg'),
        },
        {
            id: 'running-from-me',
            name: 'Running From Me',
            price: 200.00,
            oldPrice: 219.99,
            sale: false,
            image: require('~/assets/images/products/products-img6.jpg'),
        },
    ]
})

export default {
    state
};