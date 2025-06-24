let lazyImages = document.querySelectorAll('img.lazy-img');

let observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;

      img.onload = () => {
        img.classList.add('loaded');
      };

      obs.unobserve(img);
    }
  });
}, {
  rootMargin: "0px 0px 200px 0px", 
  threshold: 0.1
});

lazyImages.forEach(img => observer.observe(img));

document.getElementById('load-btn').addEventListener('click', () => {
  lazyImages.forEach(img => {
    if (!img.src) {
      img.src = img.dataset.src;
      img.onload = () => img.classList.add('loaded');
      observer.unobserve(img); 
    }
  });
});


