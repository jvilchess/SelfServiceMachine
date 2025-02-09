var products = [
        {
            "photo": "img/big-mac.png",
            "name": "Menú 1",
            "price": 5.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/mc-chicken.png",
            "name": "Menú 2",
            "price": 4.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/double-cb.png",
            "name": "Menú 3",
            "price": 2.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/fries.png",
            "name": "Menú 4",
            "price": 2.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/nuggets.png",
            "name": "Menú 5",
            "price": 3.49,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/salad.png",
            "name": "Menú x",
            "price": 2.79,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/cola.png",
            "name": "Menú x",
            "price": 1.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/lipton.png",
            "name": "Menú x",
            "price": 1.99,
            "active": false,
            "quantity": 1
        },
        {
            "photo": "img/water.png",
            "name": "Menú x",
            "price": 1.49,
            "active": false,
            "quantity": 1
        }
];

const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
            orderTotal: 0
        }
    },
    methods: {
        toggleActive: function(item){
            item.active = !item.active;
        },
        total: function(){
            var total = 0;
            this.products.forEach(function(item){
                if (item.active){
                    total+= item.price * item.quantity;
                }
            });
           return total.toFixed(2);
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');
