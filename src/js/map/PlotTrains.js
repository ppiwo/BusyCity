import { getAllTrains } from "../API";
import { addMarker } from "./BuildMap";

/**
 * Calls API function to retrieve CTA data.
 * Verifies integrity of JSON response
 * @return {Object} Train data in JSON format
 */
export async function trainDataParse() {
  let trainData = await getAllTrains();
  if (trainData && trainData.status === 200) {
    return trainData;
  } else {
    throw new Error("CTA API ERROR: Please check back again later.");
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
      let lineColor = route["@name"];
      if (route.train !== undefined && route.train.length > 1) {
        route.train.forEach((train) => {
          train.lat = parseFloat(train.lat);
          train.lon = parseFloat(train.lon);
          addMarker("train", train.lat, train.lon, train.heading);
        });
      } else {
        //handle train lines where there is only 1 or 0 trains running the route
        if (route.train !== undefined) {
          const train = route.train;
          train.lat = parseFloat(train.lat);
          train.lon = parseFloat(train.lon);
          addMarker("train", train.lat, train.lon, train.heading);
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
};
