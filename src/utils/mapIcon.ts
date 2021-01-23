import Leaflet from "leaflet";

import mapMarket from "../assets/schoolIcon.svg";

const MapIconMarket = Leaflet.icon({
  iconUrl: mapMarket,
  iconSize: [60, 69],
  iconAnchor: [30, 69],
  popupAnchor: [170, -1],
});

export default MapIconMarket;
