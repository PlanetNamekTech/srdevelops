const navList = document.querySelectorAll('.nav__link');

const selectElement = (s) => document.querySelector(s);
//Open the menu navbar on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav__list').classList.add('active');
})
//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav__list').classList.remove('active');
})
// Add close functionality when a link is clicked
navList.forEach(link => {
  link.addEventListener('click', () => selectElement('.nav__list').classList.remove('active'))
})
