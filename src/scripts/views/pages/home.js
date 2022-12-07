import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import CONFIG from '../../globals/config';

const Home = {
  async render() {
    return `
        <section id="jumbotron" class="jumbotron">
        <div class="hero">
          <div class="hero__inner">
            <h1 class="hero__title">Restoran terbaik di dekat Anda!</h1>
            <p class="hero__tagline">Find by your choice!</p>
          </div>
        </div>
      </section>
    
          <div class="content">
            <div id="restaurants" class="restaurants">
            </div>
          </div>
      `;
  },

  async afterRender() {
    const cafes = await TheRestaurantDbSource.listRestaurant();
    const moviesContainer = document.querySelector('#restaurants');
    cafes.forEach((restaurants) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Home;
