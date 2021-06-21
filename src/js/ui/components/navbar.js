import navBar from '../../../templates/navbar.hbs';
import { icons } from '../ui-content';
import { initLocate } from './locate';
import { closeInfoWindow } from '../../map/build-map';

export const initNavBar = () => {
  templateNavbar();
  toggleDtNav();
  setNavBarHeight();
  navBarDrawerEvents();
  initLocate();
};

/**
 * Call handlebars to template the nav bar
 */
const templateNavbar = () => (document.getElementById('navbar').innerHTML = navBar(icons));

/**
 * Set NavBar root variable
 */
export const setNavBarHeight = () => {
  const navBar = document.getElementById('navbar'),
    navBarHeight = navBar.offsetHeight;

  document.documentElement.style.setProperty('--bottom-bar-height', `${navBarHeight}px`);
};

/**
 * Handles all events for the navBarDrawers
 */
const navBarDrawerEvents = () => {
  const navBarItem = document.querySelectorAll('[data-open]'),
    navBarIcons = document.querySelectorAll('.nav-icon.drawer');

  navBarIcons.forEach((icon) => {
    icon.parentElement.addEventListener('click', () => {
      navBarIcons.forEach((icon) => icon.classList.remove('active', 'dt-active'));
      icon.classList.add('active', 'dt-active');
      const drawerOpenId = icon.parentElement.getAttribute('data-open'),
        drawerToBeOpened = document.querySelector(`#${drawerOpenId}`),
        allDrawers = document.querySelectorAll('.drawer-pane'),
        drawerAlreadyOpen = document.querySelector('.drawer-pane.active');
      handleDrawers(allDrawers, drawerToBeOpened, drawerAlreadyOpen);
    });
  });

  /**
   * Handles the open/close logic of the nav drawers
   * @param {string} drawerToOpen DOM ELEMENT
   * @param {string} drawerAlreadyOpen DOM ELEMENT
   */
  const handleDrawers = (allDrawers, drawerToOpen, drawerAlreadyOpen) => {
    if (drawerToOpen != drawerAlreadyOpen) {
      allDrawers.forEach((drawer) => drawer.classList.remove('active', 'dt-active'));
      if (drawerAlreadyOpen) {
        // Set delay to allow first animation to complete
        setTimeout(() => {
          drawerToOpen.classList.add('active', 'dt-active');
        }, 500);
      } else {
        drawerToOpen.classList.add('active', 'dt-active');
      }
    } else {
      if (drawerToOpen) drawerAlreadyOpen.classList.remove('active');
    }
  };
};

/**
 * Close all drawers
 */
  export const closeAllDrawers = () => {
  const bottomDrawer = document.getElementById('bottom-drawer'),
    drawerPanes = bottomDrawer.querySelectorAll('.drawer-pane'),
    navBar = document.getElementById('navbar');
  
  bottomDrawer.classList.remove('dt-active', 'active')
  navBar.classList.remove('dt-active', 'active');
  drawerPanes.forEach((pane) => pane.classList.remove('active'));
}

/**
 * Desktop nav functionality is a bit different - this function handles DT navigation
 */
const toggleDtNav = () => {
  const navBar = document.getElementById('navbar'),
    navBarToggler = navBar.querySelector('[data-toggle-dt-nav]'),
    bottomDrawer = document.getElementById('bottom-drawer'),
    drawerSettings = document.querySelectorAll('drawer-settings');

  navBarToggler.addEventListener('click', (e) => {
    navBar.classList.toggle('dt-active');
    bottomDrawer.classList.toggle('dt-active');
  });
};
