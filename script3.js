const toggle = document.getElementById('toggler');

const navLinks = document.getElementById('nav-Links');

toggler.addEventListener('click'  , ()  =>   {


   navLinks.classList.toggle('active');
} )

// text animation what are you craving for?

document.addEventListener("DOMContentLoaded", () => {
   const text = "What are you craving for?😍 " ; // Sanjay :  I have added heart-eyes emoji here 
   let index = 0;
 
   const type = () => {
     if (index < text.length) {
       document.getElementById("animated-text").innerHTML += text.charAt(index);
       index++;
       setTimeout(type, 70); // Adjust typing speed here
       // Sanjay : I have updated the typing speed to 70 
     } else {
       // Optionally restart the animation
       setTimeout(() => {
         document.getElementById("animated-text").innerHTML = "";
         index = 0;
         type();
       }, 2000); // Wait 2 seconds before restarting
     }
   };
 
   type();
 });
 

//  revew crousel 

document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");
  const reviewImages = document.querySelector(".review-images");

  const scrollAmount = 220;

  const scrollImages = (direction) => {
    reviewImages.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  };

  prevButton.addEventListener("click", () => scrollImages(-1));
  nextButton.addEventListener("click", () => scrollImages(1));
});


// ratting

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.star');
  const reviewForm = document.getElementById('review-form');
  const reviewsList = document.getElementById('reviews-list');
  const seeMoreButton = document.getElementById('see-more');
  let selectedRating = 0;
  const reviewsPerPage = 5;
  let currentPage = 1;

  const updateStarSelection = (rating) => {
    stars.forEach(star => {
      star.classList.remove('selected');
      if (star.getAttribute('data-value') <= rating) {
        star.classList.add('selected');
      }
    });
  };

  const addReview = (rating, text) => {
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating');
    for (let i = 1; i <= 5; i++) {
      const starSpan = document.createElement('span');
      starSpan.classList.add('star');
      starSpan.innerHTML = '&#9733;';
      if (i <= rating) {
        starSpan.classList.add('selected');
      }
      ratingDiv.appendChild(starSpan);
    }

    const reviewText = document.createElement('p');
    reviewText.textContent = text;

    reviewItem.appendChild(ratingDiv);
    reviewItem.appendChild(reviewText);
    reviewsList.appendChild(reviewItem);

    // Re-render the reviews to update the view
    renderReviews();
  };

  const renderReviews = () => {
    const allReviews = Array.from(document.querySelectorAll('.review-item'));
    allReviews.forEach(review => review.style.display = 'none');

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;

    allReviews.slice(startIndex, endIndex).forEach(review => review.style.display = 'block');

    if (endIndex < allReviews.length) {
      seeMoreButton.style.display = 'block';
    } else {
      seeMoreButton.style.display = 'none';
    }
  };

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = star.getAttribute('data-value');
      updateStarSelection(selectedRating);
    });
  });

  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const reviewText = document.getElementById('review-text').value;

    if (selectedRating && reviewText.trim()) {
      addReview(selectedRating, reviewText);
      reviewForm.reset();
      updateStarSelection(0);
      selectedRating = 0;
    } else {
      alert('Please provide a rating and a review text.');
    }
  });

  seeMoreButton.addEventListener('click', () => {
    currentPage++;
    renderReviews();
  });


  renderReviews();
});
