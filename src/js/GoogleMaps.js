import { Loader } from "@googlemaps/js-api-loader";
import trainKml from '../assets/map_data/train.kml'

//init map
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
  }); 
  //init KML layer for CTA EL tracks
  addKmlLayer();
}

//Adding EL track KML overlay
addKmlLayer = () => {
  let kmlElLayer = new google.maps.KmlLayer();

  kmlLayer = new google.maps.KmlLayer(trainKml, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });
}


//plot train data - recieves train data array

//