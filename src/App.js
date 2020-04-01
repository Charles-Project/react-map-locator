import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// mapStyle = "mapbox://styles/mapbox/dark-v8"

function App() {
  const [viewport, setViewport] = useState({
    latitude: 4.869794,
    longitude: 6.908839,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <h5> react map</h5>
      </ReactMapGl>
    </div>
  );
}

export default App;
