import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = ({coordinates}) => {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey:
        "AIzaSyDmTmZPHdsCgJ4janeMsYMKyTaJfHogD1E"
    });
    if(!isLoaded) {return <div>Loading......</div>}
    if(!coordinates) {return <div>Loading.......</div>}
    return(
        <div>
           {/* <h2>Visit us at our place</h2> */}
           <GoogleMap zoom={10} center={{
            lat: coordinates.latitude,
            lng: coordinates.longitude
        }} 
           mapContainerStyle={styles.containerstyle}>

           </GoogleMap>

  </div>
    
    )
}
const styles = {
    containerstyle: {
        minHeight: '500px',
        width: '100%',
        marginTop: '20px',
        // height: '100%'
    }
}

export default Map;