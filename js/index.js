/* init tabs for canchas */
const tabsElement = document.querySelector('.canchas .tabs');
var canchasTab = M.Tabs.init(tabsElement, {
  duration: 275
});

// new Glide('.glide').mount();

/* init carousels */
console.log(document.querySelectorAll('.canchas .carousel'));
document.querySelectorAll('.canchas .carousel').forEach(function(element) {
  M.Carousel.init(element, {
    fullWidth: true,
    indicators: true
  });
});