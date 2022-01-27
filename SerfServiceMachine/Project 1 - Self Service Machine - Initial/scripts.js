var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/fries.png",
        "name": "Fries",
        "price": 2.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/salad.png",
        "name": "Salad",
        "price": 2.79,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/cola.png",
        "name": "Coke",
        "price": 1.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 0
    },
    {
        "photo": "img/water.png",
        "name": "Water",
        "price": 1.49,
        "active": false,
        "quantity": 0
    },

];

//this const is going to be an object that carries all the logic of the application, so have to use curly bracets
const SelfServiceMachine = {
//start with the most important thing in the application, which is the DATA. in this case the data are the products and the prices. all the information we need is already in the var products, but in real life it usually came from a database.
    
 //all data in Vuejs is going to be inside a data property. this is a function, so it has to return an object.
    data(){
        return {
            products: window.products
        }
    },
    methods: {
        total: function(){
            var total = 0;

            this.products.forEach(function(item){
                if(item.active) {
                    total += item.price * item.quantity
                }
            });
            return total.toFixed(2);
            
        }
    }
          




};

Vue.createApp(SelfServiceMachine).mount('#app');


