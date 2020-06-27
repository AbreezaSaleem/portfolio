// Helper function from: http://stackoverflow.com/a/7557433/274826
const isElementInViewport = el => {
  const rect = el.getBoundingClientRect();
  const bottom = rect.bottom
  const top = 1.7 * rect.top
  
  return (
    (top <= 0
      && bottom >= 0)
    ||
    (bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (top >= 0 &&
      bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

const showNavbar = () => {
  return document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
}

export {
  isElementInViewport,
  showNavbar
}