/**
 * CTA uses abbreviations for train line colors
 * Here we prettify them before printing to the UI
 * @param {String} prettifyTrainLines 
 * @returns {String}
 */
module.exports = function (trainLine) {
    if (trainLine === 'brn') return 'brown';
    if (trainLine === 'g') return 'green';
    if (trainLine === 'org') return 'orange';
    if (trainLine === 'p') return 'purple';
    if (trainLine === 'y') return 'yellow';
    else return trainLine;
  };