document.addEventListener('DOMContentLoaded', function () {
  const containers = document.querySelectorAll('.responsive-video-container');
  containers.forEach((container) => {
    const aspectRatio = container.getAttribute('data-aspect-ratio').split('/');
    const aspectWidth = parseFloat(aspectRatio[0]) || 16;
    const aspectHeight = parseFloat(aspectRatio[1]) || 9;

    container.style.maxWidth = window.innerWidth;
    container.style.paddingTop = (aspectHeight / aspectWidth) * 100 + '%';
  });
});
