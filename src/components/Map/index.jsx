/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./index.css";

const mapStyles = {
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "10px",
};

const container = {
  width: "250px",
  height: "125px",
  position: "relative",
};

function MapContainer(props) {

  const { google } = props;
  return (
    <Map
      containerStyle={container}
      google={google}
      zoom={17}
      style={mapStyles}
      initialCenter={{
        lat: -9.67308,
        lng: -35.75641,
      }}
    >
      <Marker
        name="SINMED"
        position={{
          lat: -9.67308,
          lng: -35.75641,
        }}
      />
    </Map>
  );
}
export default GoogleApiWrapper(() => ({
  apiKey: "AIzaSyBB9kgFwp6aTNpW2VPglqhfRCd5jNPQzjs",
}))(MapContainer);
