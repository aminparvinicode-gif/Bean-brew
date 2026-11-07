const cart = {
    getCart() {
        const savedCart = localStorage.getItem("bb_cart");
        return savedCart ? JSON.parse(savedCart) : [];
    },
    saveCart(cartData){
        
    }
}