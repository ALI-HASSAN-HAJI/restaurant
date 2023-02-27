import React from "react";
import first from '../images/first.jpg';
import second from '../images/second.jpg';
import third from '../images/third.jpg';
import fourth from '../images/fourth.jpg';
import fifth from '../images/fifth.jpg';
import sixth from '../images/sixth.jpg';
import seventh from '../images/seventh.jpg';
import eighth from '../images/eighth.jpg';
import nineth from '../images/nineth.jpg';
import tenth from '../images/tenth.jpg';

const HomePage = () => {
 return (
    
    <div className='container' style={styles.container}>
      <div>
        <p className='p2' style={styles.p2}>kilimanjaro food court</p>
        <img className='img1' style={styles.img1} alt="first" src={first} />
        <input style={styles.input} type="text" placeholder='search for a restaurant' />
      </div>

      <p className='p' style={styles.p}>Pocket Friendly</p>

      <div className='div' style={styles.div}>
        <div>
          <img className='img2' style={styles.img2} alt='second' src={second} />
          <p className='p3' style={styles.p3}>Corner B</p>
          <p className='p3' style={styles.p3}>4 stars</p> <span className='span' style={styles.span}>300 Reviews</span>
        </div>
        <div>
          <img className='img3' style={styles.img3}  alt='third' src={third} />
          <p className='p3' style={styles.p3}>Corner B</p>
          <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
        </div>
        <div>
          <img className='img4' style={styles.img4} alt='fourth' src={fourth} />
          <p className='p3' style={styles.p3}>Corner B</p>
          <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
        </div>
      </div>

      <p className='p' style={styles.p}>Moderate</p>
      
    <div className='div' style={styles.div}>
      <div>
      <img className='img5' style={styles.img5} alt='fifth' src={fifth} />
      <p className='p3' style={styles.p3}>Corner B</p>
        <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
      </div>
      <div>
      <img className='img6' style={styles.img6}  alt='sixth' src={sixth} />
      <p className='p3' style={styles.p3}>Corner B</p>
        <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
      </div>
      <div>
      <img className='img7' style={styles.img7} alt='seventh' src={seventh} />
      <p className='p3' style={styles.p3}>Corner B</p>
        <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
      </div>
  </div>
  <p className='p' style={styles.p}>Pricey</p>
  <div className='div' style={styles.div}>
      <div>
      <img className='img8' style={styles.img8} alt='eighth' src={eighth} />
      <p className='p3' style={styles.p3}>Corner B</p>
        <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
      </div>
      <div>
      <img className='img9' style={styles.img9} alt='nineth' src={nineth} />
      <p className='p3' style={styles.p3}>Corner B</p>
        <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
      </div>
      <div>
      <img className='img10' style={styles.img10} alt='tenth' src={tenth} />
      <p className='p3' style={styles.p3}>Corner B</p>
        <p className='p3' style={styles.p3}>4 stars</p> <span>300 Reviews</span>
      </div>
      </div>
      </div>
  );
}
//

const styles = {
  container: {
    backgroundColor: '#F5F9FC',
  },
  img1: {
    height: '350px',
    width: '100%',
  },
  div: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
    marginTop: '70px',
    // backgroundColor: 'magenta',
   },
  img2: {
    height: '150px',
    width: '250px',
    margin: '10px 0 10px 30px'
  },
  img3: {
    height: '150px',
    width: '250px',
    margin: '10px 0 10px 10px'
  },
  img4: {
    height: '150px',
    width: '250px',
    margin: '10px 10px 10px 0px'
  },
  img5: {
    height: '150px',
    width: '250px',
    margin: '10px 0 10px 30px'
  },
  img6: {
    height: '150px',
    width: '250px',
    margin: '10px 0 10px 10px'
  },
  img7: {
    height: '150px',
    width: '250px',
    margin: '10px 10px 10px 0px'
  },
  img8: {
    height: '150px',
    width: '250px',
    margin: '10px 0 10px 30px'
  },
  img9: {
    height: '150px',
    width: '250px',
    margin: '10px 0 10px 10px'
  },
  img10: {
    height: '150px',
    width: '250px',
    margin: '10px 10px 10px 0px'
  },
  input: {
    position: 'absolute',
    padding: '10px',
    bottom: '120px',
    height: '30px',
    left: '0',
    right: '0',
    margin: '0 200px',
    borderRadius: '50px solid black'
  },
  p: {
    styles: 'none',
    fontSize: '30px',
    textAlign: 'center'
  },
  p2: {
    fontSize: '30px',
    fontStyle: 'italic',
    textDecoration: 'solid'
  },
  p3: {
    marginLeft: '30px',
  },
  span: {
    position: 'absolut',
    top: '50%',
    left: '50%',
  }
}
export default HomePage;