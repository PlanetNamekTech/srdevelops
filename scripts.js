const selectElement = (s) => document.querySelector(s);
//Open the menu navbar on click
selectElement('.open').addEventListener('click', () => {
  selectElement('.nav__list').classList.add('active');
})
//Close the menu on click
selectElement('.close').addEventListener('click', () => {
  selectElement('.nav__list').classList.remove('active');
})