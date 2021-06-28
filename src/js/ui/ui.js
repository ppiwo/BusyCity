import navbar from './components/navbar';
import bottomDrawer from './components/bottom-drawer';

const initUI = () => {
  bottomDrawer.init();
  navbar.init();
  updateOnResize(navbar.setHeightVar);
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
