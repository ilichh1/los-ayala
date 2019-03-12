/* init tabs for canchas */
const tabsElement = document.querySelector('.canchas .tabs');
var canchasTab = M.Tabs.init(tabsElement, {
  duration: 275
});
// Sliders instancies and declarations
const sliders = [];
const options = {
  items: 1,
  slideBy: 'page',
  autoplayButtonOutput: false,
  autoplay: true,
  controls: false,
  nav: false,
  mouseDrag: true
};
document.querySelectorAll('[id*="canchas-slider"]').forEach(e => {
  const containerObj = { container: `#${e.id}` };
  let sliderInstance = tns(Object.assign(containerObj, options));
  sliders.push(sliderInstance);
});