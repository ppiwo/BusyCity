import navBar from "../../../templates/navbar.hbs";
import { icons } from "../ui-content";
import { initLocate } from './locate';

export const initNavBar = () => {
  templateNavbar();
  setNavBarHeight();
  navBarDrawerEvents();
  initLocate();
};

const templateNavbar = () => (document.getElementById("navbar").innerHTML = navBar(icons));

const setNavBarHeight = () => {
  const navBar = document.getElementById("navbar"),
    navBarHeight = navBar.offsetHeight;

  document.documentElement.style.setProperty("--bottom-bar-height", `${navBarHeight}px`);
};

const navBarDrawerEvents = () => {
  const navBarIcons = document.querySelectorAll("[data-open]");

  navBarIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      const drawerToBeOpened = icon.getAttribute("data-open"),
        allDrawers = document.querySelectorAll(".drawer-pane"),
        drawerAlreadyOpen = document.querySelector(".drawer-pane.active"),
        drawerToOpen = document.getElementById(drawerToBeOpened);

      if (drawerToOpen != drawerAlreadyOpen) {
        allDrawers.forEach((drawer) => drawer.classList.remove("active"));
        if (drawerAlreadyOpen) {
          // Set delay to allow first animation to complete
          setTimeout(() => {
            drawerToOpen.classList.add("active");
          }, 500);
        } else {
          drawerToOpen.classList.add("active");
        }
      } else {
        drawerAlreadyOpen.classList.remove("active");
      }
    });
  });
};
