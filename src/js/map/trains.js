import { getTrains } from '../api';
import marker from './marker';

/**
 * Calls API function to retrieve CTA data.
 * Verifies integrity of JSON response
 * @return {Object} Train data in JSON format
 */
async function trainDataParse() {
  let trainData = await getTrains();
  if (trainData && trainData.status === 200) {
    return trainData;
  } else {
    throw new Error('CTA API ERROR: Please check back again later.');
  }
}

/**
 * Loop each train for each train route and add it's marker to the map
 */
const plotTrains = async () => {
  try {
    let trainData = await trainDataParse();
    trainData = trainData.data.ctatt.route;
    trainData.forEach((route) => {
      let lineColorString;

      // CTA returns undefined when no trains are running a route - skip iteration
      if (!route.train) return;
      // CTA API returns a single train as an object instead of an array - put object into an array
      if (!Array.isArray(route.train)) {
        let trainArr = [route.train];
        route.train = trainArr;
      }

      lineColorString = route['@name'];

      route.train.forEach((train) => {
        let markerInfo = parseTrainData(train, lineColorString);
        marker.add(markerInfo);
      });
    });
  } catch (err) {
    console.error(err);
  }
};

/**
 * Parse the train data from the CTA API into markerInfo object
 * @param {Object} trainData 
 * @param {String} lineColorString
 * @returns {Object}
 */
const parseTrainData = (trainData, lineColorString) => {
  let { rn, lat, lon, arrT, isDly, nextStaNm, destNm } = trainData;
  const markerInfo = {
    type: 'train',
    trainID: parseInt(rn),
    lat: parseFloat(lat),
    lon: parseFloat(lon),
    arrT: arrT,
    isDly: (isDly == 1) ? true : false,
    lineColor: lineColorString,
    lineColorHex: lineColor(lineColorString),
    nextStop: nextStaNm,
    destination: destNm
  };

  if (markerInfo.trainID === 114) console.log(markerInfo);
  return markerInfo
}

/**
 * Translate each CTA line from text form to HEX value using official CTA color values
 * @param {String} lineColorString
 * @returns {String}
 */
 const lineColor = (lineColorString) => {
  let lineColorValue;
  if (lineColorString) {
    switch (lineColorString) {
      case 'red':
        lineColorValue = '#C60C30';
        break;
      case 'blue':
        lineColorValue = '#00a1de';
        break;
      case 'brn':
        lineColorValue = '#62361b';
        break;
      case 'g':
        lineColorValue = '#009b3a';
        break;
      case 'org':
        lineColorValue = '#f9461c';
        break;
      case 'p':
        lineColorValue = '#522398';
        break;
      case 'pink':
        lineColorValue = '#e27ea6';
        break;
      case 'y':
        lineColorValue = '#f9e300';
        break;
      case 'grey':
        lineColorValue = '#565a5c';
        break;
    }
    return lineColorValue;
  }
};

export default {
  plot: plotTrains
}
