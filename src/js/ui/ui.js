import 'normalize.css';
import "../../style/style.scss";
import "../../style/info-windows.scss";
import "../../style/navbar.scss";
import '../../style/bottom-drawer.scss'
import navBar from '../../templates/navbar.hbs';
import bottomDrawer from '../../templates/bottomDrawer.hbs';
import settingsIcon from '../../assets/icons/cog-solid.svg'
import locateIcon from '../../assets/icons/locate.svg'
import aboutIcon from '../../assets/icons/info-solid.svg'

const icons = {
    settings: settingsIcon,
    locate: locateIcon,
    about: aboutIcon,
}

const bottomDrawerContent = {
    settings: {
        trainLine: [
            { lineColor: 'Red' },
            { lineColor: 'Blue' },
            { lineColor: 'Brown' },
            { lineColor: 'Green' },
            { lineColor: 'Orange' },
            { lineColor: 'Purple' },
            { lineColor: 'Pink' },
            { lineColor: 'Yellow' },
        ]
    },
    locate: {

    },
    about: {

    },
}

document.getElementById('navbar').innerHTML = navBar(icons);
document.getElementById('bottom-drawer').innerHTML = bottomDrawer(bottomDrawerContent);


    const bottomDrawerIcons = document.querySelectorAll('[data-open]');
console.log(bottomDrawerIcons)


bottomDrawerIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        const openType = icon.getAttribute('data-open'),
          drawerPanes = document.querySelectorAll('.drawer-pane'),
          drawerAlreadyOpen = document.querySelector('.drawer-pane.active'),
          elementToOpen = document.getElementById(openType);

          if (elementToOpen != drawerAlreadyOpen) {
          drawerPanes.forEach((drawer) => drawer.classList.remove('active'));
          elementToOpen.classList.add('active')
          } else {
              drawerAlreadyOpen.classList.remove('active');
          }
    })
})
