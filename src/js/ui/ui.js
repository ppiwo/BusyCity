import navBar from '../../templates/navbar.hbs';
import settingsIcon from '../../assets/icons/cog-solid.svg'
import locateIcon from '../../assets/icons/locate.svg'
import aboutIcon from '../../assets/icons/info-solid.svg'

const icons = {
    settings: settingsIcon,
    locate: locateIcon,
    about: aboutIcon,
}

document.getElementById('navbar').innerHTML = navBar(icons);