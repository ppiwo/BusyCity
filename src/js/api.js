const { default: axios } = require("axios");
const API_KEY = process.env.CTA_API_KEY;
const apiEndpoints = 
  {
    cta: 
    { 
      train: 'http://lapi.transitchicago.com/api/1.0/ttpositions.aspx'
    }
  }


/**
 * Get CTA train data from REST API
 * @return {Object} Train Data JSON
 */
export async function getTrains() {
  try {
    const trainData = await axios.get(apiEndpoints.cta.train, {
      params: {
        key: API_KEY,
        rt: 'red,blue,brn,g,org,p,pink,y',
        outputType: 'JSON'
      }
    });
    return trainData;
  } catch (error) {
    return error;
  }
}
