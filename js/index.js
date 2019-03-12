/* init tabs for canchas */
const tabsElement = document.querySelector('.canchas .tabs');
var canchasTab = M.Tabs.init(tabsElement, {
  duration: 275
});

var slider = tns({
  container: '#canchas-slider1',
  items: 1,
  slideBy: 'page',
  autoplayButtonOutput: false,
  autoplay: true,
  controls: false,
  nav: false,
  mouseDrag: true
});
var slider = tns({
  container: '#canchas-slider2',
  items: 1,
  slideBy: 'page',
  autoplayButtonOutput: false,
  autoplay: true,
  controls: false,
  nav: false,
  mouseDrag: true
});
var slider = tns({
  container: '#canchas-slider3',
  items: 1,
  slideBy: 'page',
  autoplayButtonOutput: false,
  autoplay: true,
  controls: false,
  nav: false,
  mouseDrag: true
});
var slider = tns({
  container: '#canchas-slider4',
  items: 1,
  slideBy: 'page',
  autoplayButtonOutput: false,
  autoplay: true,
  controls: false,
  nav: false,
  mouseDrag: true
});