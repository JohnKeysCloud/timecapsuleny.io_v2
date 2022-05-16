const menuBtn = document.querySelector('#menu-btn');
const themeBtn = document.querySelector('#theme-toggle');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    themeBtn.style.pointerEvents = 'auto';
    themeBtn.style.overflow = 'visible';
    themeBtn.style.opacity = '1';
    themeBtn.style.transform = 'scale(1)'
    } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    themeBtn.style.pointerEvents = 'none';
    themeBtn.style.overflow = 'hidden';
    themeBtn.style.opacity = '0';
    themeBtn.style.transform = 'scale(0)'
  }
}); 

const clrBtn = document.querySelector('#theme-toggle-btn');
let clrBtnOpen = false;

clrBtn.addEventListener('click', () => {
  if(!clrBtnOpen) {
    clrBtn.classList.add('open');
    clrBtnOpen = true;
  } else {
    clrBtn.classList.remove('open');
    clrBtnOpen = false;
  }
}); 

// const themeColor = document.getElementsByClassName('nav-link');
// const redBtn = document.querySelector('#btn-theme-red')
// let colorChange = false;

// redBtn.addEventListener('click', () => {
//   if(!colorChange) {
//     document.querySelectorAll('#home-link', '#shop-link', 'encap-link', 'about-link', 'contact-link').forEach(e => e.removeAttribute('id'));
//     themeColor.classList.add('.nav-item.red');
//     colorChange = true;
//     } else {
//     themeColor.classList.remove('.nav-item.red');
//     colorChange = false;
//   }
// }); 

// function myFunction() {
//   document.querySelectorAll('#home-link', '#shop-link', '#encap-link', '#about-link', '#contact-link').forEach(e => e.removeAttribute('id'));

//   let red = ".red";
//   let result = ".nav-link".concat(red); 
  
//   let navLink = document.querySelector(result); 
//   console.log(navLink)
// }

// kimagure - blue
// machibuse - pink
// oikake - red
// otoboke - orange 
// fankii - green