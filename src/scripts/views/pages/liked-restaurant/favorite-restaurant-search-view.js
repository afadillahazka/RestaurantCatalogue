import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div class="content">
    <h2 class="content__heading">Your Liked Restaurant</h2>
    <div id="restaurant" class="restaurant">
    </div>
  `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce((carry, cafe) => carry.concat(createRestaurantItemTemplate(cafe)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }
    document.getElementById('restaurant').innerHTML = html;

    document.getElementById('restaurant').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="movie-item__not__found">Restoran tidak ditemukan</div>';
  }
}

export default FavoriteRestaurantSearchView;
