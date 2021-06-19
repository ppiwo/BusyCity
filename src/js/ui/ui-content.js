import settingsIcon from '../../assets/icons/cog-solid.svg';
import locateIcon from '../../assets/icons/locate.svg';
import aboutIcon from '../../assets/icons/info-solid.svg';
import dtDrawerArrowIcon from '../../assets/icons/dt-drawer-arrow.svg';
import linkedin from '../../assets/icons/about/linkedin.svg';
import github from '../../assets/icons/about/github.svg';
import twitter from '../../assets/icons/about/twitter.svg';
import google from '../../assets/icons/about/google.svg';
import cta from '../../assets/icons/about/cta.svg';

/**
 * Content for Handlebars templates
 */

export const icons = {
  settings: settingsIcon,
  locate: locateIcon,
  about: aboutIcon,
  dtDrawerArrow: dtDrawerArrowIcon
};

export const bottomDrawerContent = {
  settings: {
    trainLine: [
      { lineColor: 'red' },
      { lineColor: 'blue' },
      { lineColor: 'brn' },
      { lineColor: 'g' },
      { lineColor: 'org' },
      { lineColor: 'p' },
      { lineColor: 'pink' },
      { lineColor: 'y' }
    ]
  },
  locate: {},
  about: { icons: { 
    linkedin: linkedin, 
    github: github, 
    twitter: twitter, 
    google: google, 
    cta: cta 
    } 
  }
};
