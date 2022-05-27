/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ opensNavMenuBtnAndDisplaysThemeBtn                     │
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

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ opensThemeBtn // homePageOnly                                           │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

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

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ 1. onClickAddedInlineHTMLtoNavLinks. I don't like it -_- // homePageOnly|
  | 2. removesEveryIDFromNavLinks                                           │
  │ 3. containsNavLinksInVariable                                           │
  │ 4. addsNewIDtoNavLinks                                                  |
  | // the NewID's mentioned above are currently CLASSES in CSS             |
  |     -> commented out until better method is found                       │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    | 
  └─────────────────────────────────────────────────────────────────────────┘
 */

// function myFunction() {
//   document.querySelectorAll('#home-link', '#shop-link', '#encap-link', '#about-link', '#contact-link').forEach(e => e.removeAttribute('id'));
//   const element = document.getElementsByClassName('nav-link');
//   if (element && element[0] && element[0].setAttribute && element[0].setAttribute) {
//     element[0].setAttribute('id', 'nav-link-red');
//   }
// }

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ 1. storesNavLinksInVariable (themeBtn)                                  │
  │ 2. storesRedBtnInVariable (redBtn)                                      │
  │ 3. addsClickEventListenerToRedBtn                                       │
  │ 4. OnClick -> TRUE -> conditionalRemovesIDFromNavLinks                  │
  │ 5. OnClick -> TRUE -> addsThemeClassToThemeBtnVariables                 │
  │ 6. OnClick -> FALSE -> removesNewClass                                  │
  │ // It does not function properly. It currently doesn't re-add the old   │
  │    ID's or remove old classes along with other issues.SMH.              │
  │    issues.SMH.                                                          │
  │ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇ ⬇                                                    │
  └─────────────────────────────────────────────────────────────────────────┘
 */

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