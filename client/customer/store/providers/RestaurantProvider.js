import restaurants from '../services/restaurants';

const RestaurantProvider = {
  getAllRestaurants: restaurants.getAllRestaurants,
  getRestaurantById: restaurants.getRestaurantById,
};

export default RestaurantProvider;
