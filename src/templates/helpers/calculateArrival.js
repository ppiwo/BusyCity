module.exports = function (arrivalTime) {
  // Arrival time minus current time (divided by 1000 to show seconds difference)
  const arrTime = (new Date(arrivalTime) - new Date()) / 60000;
  console.log(arrTime);
  if (arrTime < 1) return "<1";
  else return Math.round(arrTime);
};
