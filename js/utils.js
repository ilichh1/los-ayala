const APP_UTILS = {};

APP_UTILS.insertBefore = function (element, inertedElement) {
  element.insertBefore(inertedElement, element.children[0]);
};

APP_UTILS.setLoaderState = function (loaderState) {
  const loaderElement = document.querySelector('#loader');
  if (!!loaderState) {
    // Show loader
    loaderElement.style.display = 'none';
    loaderElement.classList.remove('close');
  } else {
    // Hide loader
    loaderElement.classList.add('close');
  }
};

APP_UTILS.onTransitionEnd = function (event) {
  const target = event.target;

  // hide loader
  if ('OBJECT' === target.tagName && event.propertyName == 'opacity') {
    const opacity = window.getComputedStyle(target, null).opacity;
    if (opacity == 0) {
      document.querySelector('#loader').style.display = 'none';
    }
    return;
  }
};

window.addEventListener('transitionend', APP_UTILS.onTransitionEnd);

function init() {
  console.log('APP LOADED!');

  // Hide loader after 1.2 seconds
  setTimeout(function() {
    APP_UTILS.setLoaderState(false);
  }, 1200);
}
window.addEventListener('load', init);