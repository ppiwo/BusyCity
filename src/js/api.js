const { default: axios } = require("axios");
const API_KEY = process.env.CTA_API_KEY;
const baseTrainUrlTest = `http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=${API_KEY}&rt=brn&outputType=JSON`;
const baseTrainUrl = `http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=${API_KEY}&rt=red,blue,brn,g,org,p,pink,y&outputType=JSON`;

/**
 * Get CTA train data from REST API
 * @return {Object} Train Data JSON
 */
export async function getAllTrains() {
  try {
    const trainData = await axios.get(baseTrainUrl);
    return trainData;
  } catch (error) {
    return error; // catches both errors
  }
}
