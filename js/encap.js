/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ opensNavMenuBtnAndDisplaysThemeBtn                     │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

const menuBtn = document.querySelector('#menu-btn');
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