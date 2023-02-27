import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({restaurants, result}) => {
    const navigate = useNavigate();
    return(
        <>
        {
          restaurants.length === 0 ? null : <h3 style={styles.h3}>{result}</h3> 
        }
        <Row xs={1} md={3} className="g-4">
        {
        restaurants.map((restaurant) => (
         <Col key={restaurant.id}>
            <Card onClick={() => navigate('/' +restaurant.id)}>
              <Card.Img variant="top" src={restaurant.image_url} style={styles.img}/>
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>
                 <span style={styles.rating}> {restaurant.rating} stars</span>
                 <span style={styles.review}>{restaurant.review_count} Reviews</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
           ))
        }
        </Row>
        </>
    )
}

const styles = {
    // container: {
    //   marginTop: '80px'
    // },
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
    h3: {
        textAlign: 'center',
        color: '#641E16 ',
        textDecoration: 'underline',
        marginTop: '20px',
        marginBottom: '50px'
      }
}
export default RestaurantCard;