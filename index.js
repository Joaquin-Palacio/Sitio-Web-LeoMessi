window.addEventListener('scroll', () => {
  const scrollButton = document.getElementById('scroll-to-top');
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});

document.getElementById('scroll-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
