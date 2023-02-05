import React from 'react';
import './home.scss';
import {BsFillArrowRightSquareFill} from 'react-icons/bs';


const Home = () => {
  return (
    <section className='border d-flex justify-content-center home__card'>
      <div className='border card'>
        <h2>Leonardo Castillo</h2>
        <p>Im a Developer tipyning script </p>
        <button>know More <BsFillArrowRightSquareFill/></button>
      </div>  
    </section>
  )
}

export default Home