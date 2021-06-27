import { getTrains } from '../api';
import { addMarker } from './build-map';
import marker from './marker';

/**
 * Calls API function to retrieve CTA data.
 * Verifies integrity of JSON response
 * @return {Object} Train data in JSON format
 */
export async function trainDataParse() {
  let trainData = await getTrains();
  if (trainData && trainData.status === 200) {
    return trainData;
  } else {
    throw new Error('CTA API ERROR: Please check back again later.');
  }
}

/**
 * Delegates the plotting process
 */
export const plotTrains = async () => {
  try {
    let trainData = await trainDataParse();
    trainData = trainData.data.ctatt.route;
    trainData.forEach((route) => {
      let lineColor = route['@name'];
      if (route.train !== undefined && route.train.length > 1) {
        route.train.forEach((train) => {
          const markerInfo = {
            type: 'train',
            trainID: parseInt(train.rn),
            lat: parseFloat(train.lat),
            lon: parseFloat(train.lon),
            arrT: train.arrT,
            isDly: train.isDly == 1 ? true : false,
            lineColor: lineColor,
            nextStop: train.nextStaNm,
            destination: train.destNm
          };
          marker.add(markerInfo);
        });
      } else {
        //handle train lines where there is only 1 or 0 trains running the route
        if (route.train !== undefined) {
          const train = route.train;
          let isDly;
          if (train.isDly == true) isDly = true;
          else isDly = false;
          const markerInfo = {
            type: 'train',
            trainID: parseInt(train.rn),
            lat: parseFloat(train.lat),
            lon: parseFloat(train.lon),
            arrT: train.arrT,
            isDly: train.isDly == 1 ? true : false,
            lineColor: lineColor,
            nextStop: train.nextStaNm,
            destination: train.destNm
          };
          marker.add(markerInfo);
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};

/**
 * Returns the hex value for the official CTA colors for each line
 * @param {String} lineColorString
 * @returns
 */
 export const lineColor = (lineColorString) => {
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
  get: getTrains,
  lineColor: lineColor
}
