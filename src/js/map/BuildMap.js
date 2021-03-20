import { Loader } from "@googlemaps/js-api-loader";


const trainLinesKmz = 'http://patpiwo.dev/projects/busy-city/map-data/cta_el_tracks.kmz';
const trainStationsKml = 'http://patpiwo.dev/projects/busy-city/map-data/cta_el_stations.kmz';

//init map and KML layers with CTA routes and station data
export function initMap(){
    const API_KEY = process.env.G_MAP_API_KEY;
    const loader = new Loader({
    apiKey: API_KEY,
    version: "weekly"
  });
  loader.load().then(() => {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.881832, lng: -87.623177 },
      zoom: 15,
    });

    let kmlElTrackLayer = new google.maps.KmlLayer({
        url: trainLinesKmz,
        suppressInfoWindows: true,
        map: map
      });

      let kmlElStationLayer = new google.maps.KmlLayer({
        url: trainLinesKmz,
        suppressInfoWindows: true,
        map: map
      });

      //map is built - call for trains to be plotted

  }); 
}