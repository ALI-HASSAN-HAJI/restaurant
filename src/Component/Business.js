import React, { useEffect, useState } from "react";
import businessApi from "../Api/businessApi";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import first from '../images/first.jpg';
import SearchIcon from '@mui/icons-material/Search';
import RestaurantCard from "./RestaurantCard";


const Business = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState('');
    const [search, setSearch] = useState('');
    const [icon, setIcon] = useState('');
  
    const fetchData = () => {
      businessApi.get('/')
          .then(({data}) => {
            setRestaurants(data.businesses)
            setAllRestaurants(data.businesses)
            const result = data.businesses.filter((item) => {
            return item.price == '$$'
            });
            console.log(result)
          })
    }
    // $, $$, $$$
    const filterByPrice = (price) => {
    const filteredResults = restaurants.filter((restaurant) => {
        return restaurant.price === price
      })
      return filteredResults;
    }
    const getTerm = (event) => {
      setSearch(event.target.value)
      getSearchResult()
    }
    const getSearchResult = () => {
      if(search === " ") {
        setRestaurants(allRestaurants)
      }
       setRestaurants (allRestaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(search.toLowerCase())
      }))
    }
   
    useEffect(() => {
        fetchData();
    }, [])
    
    return(
  <div>
    {/* { restaurants.filter ?
   restaurants.filter((item) => {
    return search.toLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search);
   }) : null
    } */}
       <h3>KILIMANJARO FOOD COURT</h3>
      
       <img style={styles.image} src={first} alt="food photo" />
   <div style={styles.div}>
        <input style={styles.input} type="text" placeholder="Search for a restaurant" value={search} onChange={(event) => getTerm(event)}/>
        <SearchIcon style={styles.icon} onClick = {getSearchResult}/>
   </div>
    <div>
      <Container style={styles.container}>
            <RestaurantCard restaurants={filterByPrice('$')} result='Pocket Friendly' />
            <RestaurantCard restaurants={filterByPrice('$$')} result= 'Moderate' />
            <RestaurantCard restaurants={filterByPrice('$$$')} result = 'Pricey'/>
      </Container>
    </div> 
 </div>
     
    )
}

const styles = {
  container: {
    marginTop: '80px'
  },
  img: {
    height: '300px',
  }, 
  review: {
    float: 'right',
    color: '#3a3a3a',
  },
  rating: {
    color: '#3A3A3A',
  },
  image: {
    height: '400px',
    width: '100%',
  },
  input: {
  borderRadius: '15px',
  padding: '10px 25px',
  marginTop: '-15px',
  width: '50%',
  backgroundColor: 'white',
  color: '#797979',
  fontSize: '17px solid #3a3a3a'
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: '-50px',
    marginTop: '-10px'
  },
}

export default Business;