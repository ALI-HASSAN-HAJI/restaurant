import React, { useEffect, useState } from "react";
import businessApi from "../Api/businessApi";

const LocationPin = () => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const getMap = () => {
        businessApi.get('/')
        .then(({data}) => {
            setLatitude(data.businesses[0].coordinates.latitude);
            setLongitude(data.businesses[0].coordinates.longitude);
            console.log(data.businesses)
        })
    }

    useEffect(() => {
        getMap();
    }, [])
    return(
        <div>
         <h1>{latitude}</h1>
         <h1>{longitude}</h1>
        </div>
    )
}

export default LocationPin;