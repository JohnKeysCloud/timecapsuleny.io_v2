/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ opensNavMenuBtnAndDisplaysThemeBtn                      │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const menuBtn = document.querySelector('#menu-btn');
const themeBtn = document.querySelector('#theme-toggle');
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