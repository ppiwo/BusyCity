const trainLinesKmz = 'http://patpiwo.dev/projects/busy-city/map-data/cta_el_tracks.kmz';
const trainStationsKml = 'http://patpiwo.dev/projects/busy-city/map-data/cta_el_stations.kmz';

/**
 * Init map and add KML layers with CTA Routes & Train Stations
 * (called by callback in google maps script tag in index.html)
 */
export function initMap(){
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

  }
