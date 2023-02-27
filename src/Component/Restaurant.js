import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import businessApi from "../Api/businessApi";
import opening_hours from '../images/opening hours.jpg';
import restaurant_photo from '../images/restaurant photo.png';
import location from '../images/location.jpg';
import LocationPin from "./LocationPin";
import Map from './Map';


    const Restaurant = () => {
    const {id} = useParams();
    const [restaurant, setRestaurant] = useState([])
    const [name, setName] = useState('');
    const [img1, setImg1] = useState('');
    const [img2, setImg2] = useState('');
    const [img3, setImg3] = useState('');
    // const [title, setTitle] = useState('')

    const getData = () => {
        businessApi.get(`/${id}`)
        .then(({data}) => {
            setRestaurant(data)
            setName(data.name)
            setImg1(data.photos[0])
            setImg2(data.photos[1])
            setImg3(data.photos[2])
            console.log(data)
        })
    }
        

    useEffect(()=> {
        getData();
    }, [])

    const getDay = (day) => {
        let dow;
        switch(day) {
        case 0:
            dow = 'Sunday';
            break;
        case 1:
            dow = 'Monday';
            break;
        case 2:
            dow = 'Tuesday';
            break;
        case 3:
            dow = 'Wednesday';
            break;
        case 4:
            dow = 'Thursday';
            break;
        case 5:
            dow = 'Friday';
            break;
        case 6: 
            dow = 'Saturday';
            default:                          
        }
        return dow;
    }

    const getTime = (time) => {
     return time.replace(/(..)/g, '$1:').slice(0, -1)
    }
    

    return(
        <div style={styles.container}>
            <h1>KILIMANJARO FOOD COURT</h1>
            <h3>{name}</h3>
            <p>
                {
                     restaurant.categories ?
                     restaurant.categories.map( (item) => {
                         return `${item.title} `
                     }): null
                }
            </p>
            <div style={styles.img}>
            <img style={styles.img} src={img1} alt="photo1" />
            <img style={styles.img} src={img2} alt="photo2" />
            <img style={styles.img} src={img3} alt="photo3" />
            </div>
            
           <div style={styles.cont}>
            <div style={styles.daysCont}>
                <h3 style={styles.h3}>OPENING HOURS</h3>
                { restaurant.hours ?
                    restaurant.hours[0].open.map((day) => {
                        return(
                            <div style={styles.dayCont}>
                                <p>{getDay(day.day)}</p>
                                <p>{getTime(day.start)} - {getTime(day.end)}</p>


                            </div>
                        )
                    }) : null
                }
            </div>
           
            {/* { restaurant.categories ?
                restaurant.categories.map( (item) => {
                    return(
                        <p>{`${item.title}, `}</p>
                    )
                }): null
            } */}
            {/* <LocationPin /> */}
            
            <div style={styles.map}>
                <Map coordinates={restaurant.coordinates}/>
            </div>
           </div>
          
        </div>
        
    )
}

const styles = {
    map: {
        // border: '1px solid #000',
        flex: 1
    },
    cont: {
        display: 'flex',
        flex: 1,

    },
    dayCont: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    daysCont: {
        backgroundColor: '#698187',
        color: 'white',
        marginTop: '20px',
        // marginLeft: '50px',
        padding: '50px'
    },
    container: {
      backgroundColor: '#BFEAF5 '
    },
  
    img: {
        height: '300px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px'
    },
    h3: {
        textDecoration: 'underline',
        marginBottom: '20px'
    },
   
}

export default Restaurant;