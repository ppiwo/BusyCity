import { initNavBar, setNavBarHeight } from './components/navbar';
import { initDrawer } from './components/bottom-drawer';

const initUI = () => {
  initDrawer();
  initNavBar();
  updateOnResize(setNavBarHeight);
};

/**
 * Update root variables when screen resizes
 */
function updateOnResize() {
  window.addEventListener('resize', () => {
    setNavBarHeight();
  });
}

export default initUI;
