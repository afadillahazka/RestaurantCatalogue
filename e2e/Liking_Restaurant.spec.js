const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.wait(1);
  I.seeElement('#mainContent');
});

Scenario('liking one restaurant', async ({ I }) => {
  // I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(5);
  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(1);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.seeElement('.restaurant__title');
  I.wait(2);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.restaurant__title');
  const firstRestaurant = locate('.restaurant__title').first();
  I.click(firstRestaurant);
  I.wait(2);
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.wait(2);
  I.seeElement('.restaurant__title');
  I.wait(2);
  const restaurantfirst = locate('.restaurant__title').first();
  I.click(restaurantfirst);
  I.wait(2);
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867');
  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('/#/like');
  I.dontSee('.restaurant__title');
});
