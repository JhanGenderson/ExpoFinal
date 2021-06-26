import { MapContainer, TileLayer, Marker } from "react-leaflet";
import React from "react";

export default function Mapa() {
  return (
   <div className="border border-2 border-success col-12 col-lg-12 col-md-12 col-sm-12 ">
     <MapContainer center={[-11.97660439036688, -77.07209791646994]} zoom={16} style={{height:'400px'}}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-11.97660439036688, -77.07209791646994]}>

        </Marker>
      </MapContainer>
   </div>
      
  
  );
}
