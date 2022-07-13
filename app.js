const app = Vue.createApp({
    // option object 👇 
    data()
    {
        return{
            // styles:{
            //     border: '10px solid black'
            // },
            cart:0,
            logo: "./img/logo.svg",
            product: 'Sneakers',
            // task one
            productDescription: 'Athletic or casual rubber-soled shoes are called sneakers. Before you walk your neighbor\'s Great Dane, you\'ll have to take off your...',
            productImage: './img/sneakers-black.png',
            imageAlt: "Teal sneakers",
            productLink: 'www.sneakerslive.com',
            inventory: 0,
            onSale:true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color : 'teal', image: './img/sneakers-teal.png', title:'teal sneakers'},
                {id: 2235, color : 'red', image: './img/sneakers-red.png', title: 'red sneakers'},
            ],
            sizes:['28','55','90']
        }
    },
    methods: {
        addToCart()
        {
            this.cart ++
        },
        removeFromCart()
        {
            this.cart --
        },
        updateImage(variantImage)
        {
            this.productImage = variantImage;
        }
    },
}).mount('#app')

// v-show can be used to toggle element visibility
// v-for can be used to loop through an array