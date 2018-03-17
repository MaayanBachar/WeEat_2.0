import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    (<GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 32.0755, lng: 34.7757 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 32.0755, lng: 34.7757 }} />}
    </GoogleMap>)
));

export function Map(){
    return (
        <div className="map">
            <MyMapComponent
                isMarkerShown={false}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUGpNjQ-H4t45okAePNtVfQ9odlSfgiHM&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%`, width: '500px' }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default Map;


