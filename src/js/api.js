const { default: axios } = require("axios");

const API_KEY = process.env.CTA_API_KEY;
const baseUrl = `http://lapi.transitchicago.com/api/1.0/ttpositions.aspx?key=${API_KEY}&rt=red,blue,brn,g,org,p,pink,y&outputType=JSON`;

/**
 * Get CTA train data from REST API
 * @return {Object} Train Data JSON
 */
export function getAllTrains() {
    axios.get(baseUrl)
    .then((res) => {
    })
    .catch(err => console.log('Error communicating with CTA. Service may be disrupted.'))
}
