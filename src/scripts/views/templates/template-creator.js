import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
  <div class="restaurant__info">
  <div id="likeButtonContainer"></div>
    <h3>Information</h3>
    <div class="restaurant__description"> 
    <h4>Description</h4>
    <p>${restaurant.restaurant.description}</p>
    </div>
    <div class="restaurant__menus"> 
    <div class="restaurant__menus__foods"> 
    <h4>Foods List</h4>
    <p>${restaurant.restaurant.menus.foods.map((food) => food.name).join('<br> ')}</p>
    </div>
    <div class="restaurant__menus__foods"> 
    <h4>Drinks List</h4>
    <p>${restaurant.restaurant.menus.drinks.map((drink) => drink.name).join('<br> ')}</p>
    </div>
    </div>
    <div class="restaurant__location">
    <div class="restaurant__location__city">
    <h4>City</h4>
    <p>${restaurant.restaurant.city}</p>
    </div>
    <div class="restaurant__location__address">
    <h4>Address</h4>
    <p>${restaurant.restaurant.address}</p>
    </div>
    </div>
    <div class="restaurant__rating">
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.restaurant.rating}</p>
    </div>
    <div class="restaurant__overview">
      <h3>Overview</h3>
      ${restaurant.restaurant.customerReviews.map((review) => `
      <p class="review__name">${review.name}</p>
      <p class="review__comment">${review.review}</p>
      <p class="review__date">${review.date}</p>
      `).join('<br>')}
      </div>
    </div>
    `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
      <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="restaurant-item__header__rating">
          <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating} | ${restaurant.city}</span></p>
        </div>
      </div>
      <div class="restaurant-item__content">
        <h3 class="restaurant__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
      </div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
     </button>
  <p>Tambahkan ke daftar suka</p>
  `;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
  <p>Hapus dari daftar suka</p>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
