import { getAllTrains } from "../API";

/**
 * Calls API function to retrieve CTA data.
 * Verifies integrity of JSON response
 * @return {Object} Train data in JSON format
 */
export async function trainDataParse() {
  let trainData = await getAllTrains;
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
  } catch (err) {
    console.error(err);
  }
};
