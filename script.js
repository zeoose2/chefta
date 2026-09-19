const transactionButton = document.querySelector('#newTransaction');
const toast = document.querySelector('.toast');
const menuButton = document.querySelector('.menu-button');
const sidebar = document.querySelector('.sidebar');

transactionButton.addEventListener('click', () => {
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2600);
});

menuButton.addEventListener('click', () => sidebar.classList.toggle('open'));
