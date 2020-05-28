const ratings = {
  sony: 4.7,
  samsung: 3.4,
  vizio: 2.3,
  panasonic: 3.6,
  phillips: 4.1
}

//total stars
const starsTotal = 5;

document.addEventListener('DOMContentLoaded', getRatings);

//form elements
const productSelect = document.getElementById('product-select');
const ratingControl = document.getElementById('rating-control');

//init product
let product;

//product select change
productSelect.addEventListener('change', (e) => {
  product = e.target.value;
  //enable rating
  ratingControl.disabled = false;
  ratingControl.value = ratings[product];
})

//rating control change
ratingControl.addEventListener('blur', (e) => {
  const rating = e.target.value;
  //check for 1-5
  if(rating > 5) {
    alert('Please rate 1-5');
    return;
  }
  //change rating
  ratings[product] = rating;

  getRatings();
})

function getRatings() {
    for (let rating in ratings) {
      //get percentage ratings[rating] takes 4.7 3.4 ...
      const starPercentage = (ratings[rating] / starsTotal) * 100;

      //round to nearest 10
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

      //set width of stars-inner to percentage
      document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;

      //add number rating
      document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    }
}
