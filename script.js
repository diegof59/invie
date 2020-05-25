'use strict';

const onLoad = () => {
  const burgerButton = document.getElementById("burger-button");
  burgerButton.addEventListener('click', switchMenu);
};

const switchMenu = (ev) => {
  const navMenu = document.getElementById("menu");

  const burgerButtonIcon = document.getElementById("burger-button-icon")
                        .getElementsByTagName('use')[0];

  navMenu.classList.contains('active') ?
      navMenu.classList.remove('active')
    :
      navMenu.classList.add('active');
  
  if(burgerButtonIcon.getAttribute('xlink:href') == '#icon-menu'){
    burgerButtonIcon.setAttribute('xlink:href', '#icon-cancel-circle');
  }
  else{
    burgerButtonIcon.setAttribute('xlink:href', '#icon-menu');
  }
};

