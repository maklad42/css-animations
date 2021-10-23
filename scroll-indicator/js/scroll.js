window.addEventListener('scroll', scrollProgress);

function scrollProgress() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const winHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / winHeight) * 100;
  document.getElementById('progressBar').style.width = `${scrolled}%`;
}
