const app =Vue.createApp({

    data:function(){

        return{

            variants:[
                {id:1 , name:'Vanilla ',price: '120'},
                {id:2, name:'Chocolate',price: '100'},
                {id:3, name:'Strawberry',price: '150'},
                {id:4, name:'Orange',price: '100'},
                {id:5, name:'Lemon',price: '100'},
            ],
            cart:[]

        }
    }, 
        methods:{

                addToCart(variantId){
                    this.cart.push(this.variants.find(variant => variant.id =variantId));
                },
                removeItem(variantId){
                    
                    let remove = this.cart.findIndex(variant =>variant.id =variantId);

                    this.cart.splice(remove, 1);
                }
        }

})