import orders from '../services/orders';

const OrderProvider = {
  placeOrder: orders.placeOrder,
  fetchOrders: orders.fetchOrders,
};

export default OrderProvider;
