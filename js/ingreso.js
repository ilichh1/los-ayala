const loginForm = document.querySelector('form#login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  window.alert('Próximamente disponible...');
  console.log('Trying to login...');
  return false;
});