//parseTrainData() - called in index returns train data array

/**
 * Parses train data JSON.
 *
 * @param {Object} trainData Train data in JSON format
 * @return {Array} an array 
 */
let trainDataParse = () => {
    if (trainData && trainData.status === 200) {
        console.log(trainData)
        return trainData
    } else {
        console.log("CTA API ERROR: Please check back again later.");
    }
}

export function trainDataParse();