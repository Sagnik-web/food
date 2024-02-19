import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { useControl } from "react-map-gl";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export const TOKEN =
  "pk.eyJ1Ijoid2VibG9vcDAwNyIsImEiOiJjbHNzdGVpNnIxajVxMmxwczNpNTh0a2lsIn0.gOyifKqp7D40cXeb-CISjQ";

const Geocoder = ({ setNewPlace, mapRef }) => {
  const ctrl = new MapBoxGeocoder({
    accessToken: TOKEN,
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on("result", (e) => {
    const coords = e.result.geometry.coordinates;
    setNewPlace({ lng: coords[0], lat: coords[1] });
    console.log("nnnnn", e);
    mapRef.current.flyTo({
      center: e.result.geometry.coordinates,
      zoom: 16,
      pitch: 45,
    });
  });
  return null;
};

export default Geocoder;

//       <ButtonGroup aria-label="outlined primary button group">
{
  /* <Button
variant={viewSelected === 45 ? "contained" : "outlined"}
onClick={() => changeViewPort(45)}
>
Default View
</Button>
<Button
variant={viewSelected === 1 ? "contained" : "outlined"}
onClick={() => changeViewPort(1)}
>
Top View
</Button>
<Button
variant={viewSelected === 120 ? "contained" : "outlined"}
onClick={() => changeViewPort(120)}
>
Bottom View
</Button>
</ButtonGroup> */
}