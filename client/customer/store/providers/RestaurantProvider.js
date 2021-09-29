import restaurants from '../services/restaurants';

const RestaurantProvider = {
  getAllRestaurants: restaurants.getAllRestaurants,
  getRestaurantById: restaurants.getRestaurantById,
  searchRestaurants: restaurants.search,
};

export default RestaurantProvider;
