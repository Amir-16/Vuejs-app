const app =Vue.createApp({

    data(){

        return{

            variants: [
                
                {id: 1 , name: 'Vanilla ',price: 120},
                {id: 2, name:  'Chocolate',price: 140},
                {id: 3, name: 'Strawberry',price: 120},
                {id: 4, name: 'Orange',price: 150},
                {id: 5, name: 'Lemon',price: 120},
            ],
            cart: []

        }
    }, 
        methods:{

                addToCart(variantId){
                    this.cart.push(this.variants.find(variant => variant.id =variantId));
                },
                removeFromCart(variantId){
                    
                    let remove = this.cart.findIndex(variant =>variant.id =variantId);

                    this.cart.splice(remove, 1);
                }
        },computed:{
            total(){
                
                return this.cart.reduce((t,variant)=> t + variant.price, 0 );
            }
        }

})