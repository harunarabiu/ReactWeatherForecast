import React from 'react';
import {Marker, withScriptjs,withGoogleMap, GoogleMap} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap(
                props => (
                    <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}}>
                        <Marker position={{lat: props.lat, lng: props.lon}} />
                    </GoogleMap>
                )
                
            ))

export default (props) => {
        return (
            
            <Map 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo&v=3.exp"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `150px`,width: '200px' }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat={props.lat}
                lon={props.lon}
            
            />
        )
       
        
}

