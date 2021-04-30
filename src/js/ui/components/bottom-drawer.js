import bottomDrawer from '../../../templates/bottom-drawer.hbs';
import { bottomDrawerContent } from '../ui-content';
import { initMarkerResize } from './marker-resize';

export const initDrawer = () => {
    templateBottomDrawer();
    paneTabHandler();
    initMarkerResize();
}

const templateBottomDrawer = () => (document.getElementById("bottom-drawer").innerHTML = bottomDrawer(bottomDrawerContent));

/**
 * Handles events on inactive pane tab headers
 */
const paneTabHandler = () => {
  const tabToggles = document.querySelectorAll("[data-toggle-tab]");
  //remove active on all tabs
  tabToggles.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      paneTabAction(e, tabToggles);
    });
  });
};

/**
 * Switches panes when a pane header is clicked
 * @param {Object} e
 * @param {Object} tabToggles
 */
const paneTabAction = (e, tabToggles) => {
  const id = e.target.getAttribute("data-toggle-tab"),
    paneToShow = document.getElementById(id),
    tabTogglesArray = Array.from(tabToggles),
    tabContentElements = tabTogglesArray.map((tab) => {
      const tabId = tab.getAttribute("data-toggle-tab");
      return document.getElementById(tabId);
    });

  tabToggles.forEach((tabToggle) => {
    tabToggle.classList.remove("active");
  });

  tabContentElements.forEach((tabContentPane) => {
    tabContentPane.classList.remove("active");
  });

  paneToShow.classList.add("active");
  e.target.classList.add("active");
};
