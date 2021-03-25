const { default: axios } = require("axios");
const API_KEY = process.env.CTA_API_KEY;
const baseTrainUrl = `http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=${API_KEY}&rt=red,blue,brn,g,org,p,pink,y&outputType=JSON`;

/**
 * Get CTA train data from REST API
 * @return {Object} Train Data JSON
 */
export let getAllTrains = axios
.get(baseTrainUrl)
  .then((res) => {
    return res;
  })
  .catch((err) => {
    return err;
  });
