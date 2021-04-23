import 'normalize.css';
import '../../style/style.scss';
import '../../style/info-windows.scss';
import '../../style/navbar.scss';
import '../../style/bottom-drawer.scss';
import navBar from '../../templates/navbar.hbs';
import bottomDrawer from '../../templates/bottomDrawer.hbs';
import { icons, bottomDrawerContent } from './ui-content';

const initUI = () => {
  templateNavbar();
  setNavBarHeight();
  templateBottomDrawer();
  bottomDrawerEvents();
};

const templateNavbar = () => (document.getElementById('navbar').innerHTML = navBar(icons));

const templateBottomDrawer = () => (document.getElementById('bottom-drawer').innerHTML = bottomDrawer(bottomDrawerContent));

const bottomDrawerEvents = () => {
  const bottomDrawerIcons = document.querySelectorAll('[data-open]');

  bottomDrawerIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const drawerToBeOpened = icon.getAttribute('data-open'),
        allDrawers = document.querySelectorAll('.drawer-pane'),
        drawerAlreadyOpen = document.querySelector('.drawer-pane.active'),
        drawerToOpen = document.getElementById(drawerToBeOpened);

      if (drawerToOpen != drawerAlreadyOpen) {
        allDrawers.forEach((drawer) => drawer.classList.remove('active'));
        if (drawerAlreadyOpen) {
          // Set delay to allow first animation to complete
          setTimeout(() => {
            drawerToOpen.classList.add('active');
          }, 500);
        } else {
          drawerToOpen.classList.add('active');
        }
      } else {
        drawerAlreadyOpen.classList.remove('active');
      }
    });
  });
};

const setNavBarHeight = () => {
  const navBar = document.getElementById('navbar'),
    navBarHeight = navBar.offsetHeight;

  document.documentElement.style.setProperty('--bottom-bar-height', `${navBarHeight}px`);
};

export default initUI;
