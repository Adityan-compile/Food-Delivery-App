import cart from '../services/cart';

const CartProvider = {
  addToCart: cart.addToCart,
  getCart: cart.getCart,
};

export default CartProvider;
