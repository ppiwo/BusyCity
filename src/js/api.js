const { default: axios } = require("axios");
const apiEndpoints = 
  {
    cta: 
    { 
      train: 'https://busy-city.herokuapp.com/trains' // Using a proxy due to CORS restriction on CTA API
    }
  }


/**
 * Get CTA train data from REST API
 * @return {Object} Train Data JSON
 */
export async function getTrains() {
  try {
    const trainData = await axios.get(apiEndpoints.cta.train, {
      // params: {
      //   key: API_KEY,
      //   rt: 'red,blue,brn,g,org,p,pink,y',
      //   outputType: 'JSON'
      // }
    });
    return trainData;
  } catch (error) {
    return error;
  }
}
