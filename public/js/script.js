// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all the functionality
  initNav();
  initScrollAnimations();
  initReviewsSlider();
  initBackToTopButton();
});

// Navigation functionality
function initNav() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close mobile menu when a nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
  
  // Change header background on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Scroll animations
function initScrollAnimations() {
  // Animate elements on scroll (using Intersection Observer)
  const scrollElements = document.querySelectorAll('.service-card, .about-image, .about-text, .contact-card');
  
  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('scrolled');
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Trigger once on load
  handleScrollAnimation();
}

// Reviews slider
function initReviewsSlider() {
  // Fetch reviews from the server or use sample data
  fetchReviews()
    .then(reviews => {
      displayReviews(reviews);
      setupReviewsSlider();
    })
    .catch(error => {
      console.error('Error fetching reviews:', error);
      // Display sample reviews if fetching fails
      const sampleReviews = getSampleReviews();
      displayReviews(sampleReviews);
      setupReviewsSlider();
    });
}

// Fetch reviews from our server
async function fetchReviews() {
  try {
    const response = await fetch('/api/reviews');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return getSampleReviews();
  }
}

// Sample reviews to use if API fails
function getSampleReviews() {
  return [
    {
      author: "Amine Jamai",
      rating: 5,
      text: "Un service excellent avec une grande attention aux détails, fortement recommandé!",
      timeAgo: "2 weeks ago"
    },
    {
      author: "Mehdi Alaoui",
      rating: 5,
      text: "Travail professionnel, beau résultat. Je recommande vivement!",
      timeAgo: "1 month ago"
    },
    {
      author: "Sarah Ben",
      rating: 5,
      text: "Résultat exceptionnel, service rapide et professionnel!",
      timeAgo: "3 weeks ago"
    },
    {
      author: "Karim Hassan",
      rating: 4,
      text: "Très content du résultat, je reviendrai pour mon autre voiture!",
      timeAgo: "1 month ago"
    },
    {
      author: "Laila Tazi",
      rating: 5,
      text: "Excellent service, personnel très professionnel et résultat impeccable!",
      timeAgo: "2 months ago"
    }
  ];
}

// Display reviews in the slider
function displayReviews(reviews) {
  const reviewsSlider = document.getElementById('reviewsSlider');
  
  // Create container for reviews
  const reviewsContainer = document.createElement('div');
  reviewsContainer.className = 'reviews-container';
  
  // Add review cards to container
  reviews.forEach(review => {
    const reviewCard = document.createElement('div');
    reviewCard.className = 'review-card';
    
    // Generate stars based on rating
    let stars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        stars += '<i class="fas fa-star"></i>';
      } else {
        stars += '<i class="far fa-star"></i>';
      }
    }
    
    // Review card content
    reviewCard.innerHTML = `
      <div class="review-header">
        <div class="reviewer">
          <h4 class="reviewer-name">${review.author}</h4>
          <span class="review-time">${review.timeAgo}</span>
        </div>
      </div>
      <div class="review-rating">
        ${stars}
      </div>
      <p class="review-text">${review.text}</p>
    `;
    
    reviewsContainer.appendChild(reviewCard);
  });
  
  reviewsSlider.appendChild(reviewsContainer);
}

// Set up the slider functionality
function setupReviewsSlider() {
  const reviewsContainer = document.querySelector('.reviews-container');
  const reviewCards = document.querySelectorAll('.review-card');
  const prevButton = document.getElementById('prevReview');
  const nextButton = document.getElementById('nextReview');
  
  let currentIndex = 0;
  const cardWidth = reviewCards[0].offsetWidth + 30; // card width + margin
  
  // Initially show only the first review
  reviewsContainer.style.transform = `translateX(0)`;
  
  // Next button click
  nextButton.addEventListener('click', () => {
    if (currentIndex < reviewCards.length - 1) {
      currentIndex++;
      reviewsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
  
  // Previous button click
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      reviewsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  });
  
  // Add swipe functionality for mobile
  let touchStartX = 0;
  let touchEndX = 0;
  
  reviewsContainer.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  reviewsContainer.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    const minSwipeDistance = 50;
    
    if (touchEndX + minSwipeDistance < touchStartX) {
      // Swipe left (next)
      nextButton.click();
    }
    if (touchEndX > touchStartX + minSwipeDistance) {
      // Swipe right (prev)
      prevButton.click();
    }
  }
}

// Back to top button
function initBackToTopButton() {
  const backToTopButton = document.getElementById('backToTop');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Add CSS animations for scroll elements
document.head.insertAdjacentHTML(
  'beforeend',
  `<style>
    .service-card, .about-image, .about-text, .contact-card {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .service-card.scrolled, .about-image.scrolled, .about-text.scrolled, .contact-card.scrolled {
      opacity: 1;
      transform: translateY(0);
    }
    
    .service-card:nth-child(1) {
      transition-delay: 0.1s;
    }
    
    .service-card:nth-child(2) {
      transition-delay: 0.2s;
    }
    
    .service-card:nth-child(3) {
      transition-delay: 0.3s;
    }
    
    .service-card:nth-child(4) {
      transition-delay: 0.4s;
    }
    
    .contact-card:nth-child(1) {
      transition-delay: 0.1s;
    }
    
    .contact-card:nth-child(2) {
      transition-delay: 0.2s;
    }
    
    .contact-card:nth-child(3) {
      transition-delay: 0.3s;
    }
    
    .contact-card:nth-child(4) {
      transition-delay: 0.4s;
    }
  </style>`
);