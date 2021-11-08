import favourites from '../services/favourites';

export default FavouritesProvider = {
  loadFavourites: favourites.loadFavourites,
  addToFavourites: favourites.addToFavourites,
  removeFromFavourites: favourites.removeFromFavourites,
};
