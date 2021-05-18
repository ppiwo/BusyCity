import { initNavBar } from './components/navbar';
import { initDrawer } from './components/bottom-drawer';

const initUI = () => {
  initDrawer();
  initNavBar();
};

export default initUI;
