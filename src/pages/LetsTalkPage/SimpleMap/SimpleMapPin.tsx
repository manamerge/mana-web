import React from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Leaflet default icon
const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface SimpleMapPinProps {
    lat: number;
    lng: number;
    zoom?: number;
    width?: string;
    height?: string;
}

export default function SimpleMapPin({
    lat,
    lng,
    zoom = 2,
    width = "100%",
    height
}: SimpleMapPinProps) {
    return (
        <MapWrapper style={{ width, height }}>
            <MapContainer
                center={[lat, lng]}
                zoom={zoom}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[lat, lng]} icon={defaultIcon}>
                    <Popup>We are here!</Popup>
                </Marker>
            </MapContainer>
        </MapWrapper>
    );
}

const MapWrapper = styled.div`
    width: 100%;
    /* height: 400px; */
    border-radius: 23px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;
