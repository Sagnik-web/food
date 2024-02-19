// import React from "react";

import { useState } from "react";
import ReactMapGL, {
  Layer,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl";
// import { TOKEN } from "./Geocoder";

// -26.475393195281754, 153.04416685709924

const AppMap = ({
  mapRef,
  // setNewPlace,
  // newPlace,
  polygonCord,
  layerColor,
  viewport,
  setViewport,
}) => {

    const TOKEN = "pk.eyJ1Ijoid2VibG9vcDAwNyIsImEiOiJjbHNzdGVpNnIxajVxMmxwczNpNTh0a2lsIn0.gOyifKqp7D40cXeb-CISjQ"
  const handleAddClick = (e) => {
    setNewPlace({
      lat: e?.lngLat?.lat,
      lng: e?.lngLat?.lng,
    });
  };
  

  const [viewPort, setViewPort] = useState({
    latitude: 28.6448,
    longitude: 77.216,
    width: 800,
    height: 800,
    zoom: 8
  })
 
  const [newPlace,setNewPlace] = useState({
      lat:28,
      lng:77

  })

  return (
    <>
    <div>
    <ReactMapGL
      ref={mapRef}
    //   {...viewport}
      mapboxAccessToken={TOKEN}
      
      {...viewPort}
      // width="100%"
      // height="100%"
      // onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      // onDblClick={handleAddClick}
      transitionDuration="200"
      attributionControl={true}
    >
      

      {newPlace ? (
        <Marker
          latitude={newPlace?.lat}
          longitude={newPlace?.lng}
          draggable
          onDragEnd={(e) =>
            setNewPlace({ lng: e.lngLat.lng, lat: e.lngLat.lat })
          }
        />
      ) : null}
      <NavigationControl position="bottom-right" />
    </ReactMapGL>

    </div>
    </>
  );
};

export default AppMap;