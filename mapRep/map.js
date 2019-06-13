function moveMapToBerlin(map){
  map.setCenter({lat:31, lng:31});
  map.setZoom(8);
}

function addMarkersToMap(map) {
  var parisMarker = new H.map.Marker({lat:48.8567, lng:2.3508});
  map.addObject(parisMarker);

  var romeMarker = new H.map.Marker({lat:41.9, lng: 12.5});
  map.addObject(romeMarker);

  var berlinMarker = new H.map.Marker({lat:52.5166, lng:13.3833});
  map.addObject(berlinMarker);

  var madridMarker = new H.map.Marker({lat:40.4, lng: -3.6833});
  map.addObject(madridMarker);

  var londonMarker = new H.map.Marker({lat:51.5008, lng:-0.1224});
  map.addObject(londonMarker);
}



/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'aR9ow34skNoAh0EAYrAR',
  app_code: 'PI_0oweAVcXEvnes_SuJcg',
  useHTTPS: true
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

//Step 2: initialize a map  - not specificing a location will give a whole world view.
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map, {pixelRatio: pixelRatio});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

function switchMapLanguage(map, platform){
  var mapTileService = platform.getMapTileService({
      type: 'base'
    }),
    // Our layer will load tiles from the HERE Map Tile API
    chineseMapLayer = mapTileService.createTileLayer(
      'maptile',
      'normal.day',
      pixelRatio === 1 ? 256 : 512,
      'png8',
      {lg: 'ARA', ppi: pixelRatio === 1 ? undefined : 320}
    );
  map.setBaseLayer(chineseMapLayer);

  // Display default UI components on the map and change default
  // language to simplified Chinese.
  // Besides supported language codes you can also specify your custom translation
  // using H.ui.i18n.Localization.
  //var ui = H.ui.UI.createDefault(map, defaultLayers, 'Ar-Eg');

  // Remove not needed settings control
  ui.removeControl('mapsettings');
}
function restrictMap(map){

  var bounds = new H.geo.Rect(31.6, 25.1, 22.4, 34);

  map.getViewModel().addEventListener('sync', function() {
    var center = map.getCenter();

    if (!bounds.containsPoint(center)) {
      if (center.lat > bounds.getTop()) {
        center.lat = bounds.getTop();
      } else if (center.lat < bounds.getBottom()) {
        center.lat = bounds.getBottom();
      }
      if (center.lng < bounds.getLeft()) {
        center.lng = bounds.getLeft();
      } else if (center.lng > bounds.getRight()) {
        center.lng = bounds.getRight();
      }
      map.setCenter(center);
    }
  });


}
function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}




// Now use the map as required...
switchMapLanguage(map , platform);

restrictMap(map);

moveMapToBerlin(map);
addMarkersToMap(map);
addInfoBubble(map);
