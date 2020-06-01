// Helper function from: http://stackoverflow.com/a/7557433/274826
const isElementInViewport = el => {
  const rect = el.getBoundingClientRect();
  const bottom = 2  * rect.bottom
  const top = 2  * rect.top
  
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

export {
  isElementInViewport
}