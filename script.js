let track = document.querySelector('.slide-track');

// Loop through slides 
track.addEventListener('animationiteration', () => {

  let slides = track.querySelectorAll('.slide');

  // Clone all slides
  slides.forEach(slide => {
    let clone = slide.cloneNode();
    track.appendChild(clone);
  });

  // Reset track position
  track.style.transform = 'translateX(0)';

});