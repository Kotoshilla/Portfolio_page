const humburger = document.querySelector('.humburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay');

humburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skill__scale-percent'),
      lines = document.querySelectorAll('.skill__scale-second div');

percent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});