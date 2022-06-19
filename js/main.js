/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ NavMenuBtn                                                              │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const menuBtn = document.querySelector('#menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
}); 

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ pressStartBtn                                                             │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const pressStart = document.querySelector('.pressStart');
let btnPressed = false;

pressStart.addEventListener('click', () => {
  if (!btnPressed) {
    pressStart.classList.add('pressed');
    btnPressed = true;
  } else {
    pressStart.classList.remove('pressed');
    btnPressed = false;
  }
});
