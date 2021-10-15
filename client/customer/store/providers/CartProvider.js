import cart from '../services/cart';

const CartProvider = {
  addToCart: cart.addToCart,
  getCart: cart.getCart,
  remove: cart.deleteFromCart,
};

export default CartProvider;
