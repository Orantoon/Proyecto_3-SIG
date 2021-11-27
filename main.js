import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

let map = null;

const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

const raster = new TileLayer({
  source: new XYZ({
    attributions: attributions,
    url: 'proyecto3.xml',
    maxZoom: 20,
  }),
});

map = new Map({
  layers: [raster],
  target: document.getElementById('map'),
  view: new View({
    center: [739218, 5906096],
    maxZoom: 19,
    zoom: 17,
  }),
});