import './home.scss';
import Typed from 'react-typed';

const Home = () => {
  return (
    <section class="border bg-img" id="home">
      <div class="typed-container text-white">
          <p class="home-title">Leonardo <span class="text-second-color">Castillo</span> </p> 
          <p class="home-text">I'm <span class="typed" >
          <Typed
            strings={[
              'a Full-Stack Developer',
              'a Freelancer', 'a Code Lover',
              'a Mountain Biker',
              'Leo'
            ]}
            typeSpeed={90}
            backSpeed={100}
            loop
          /></span></p>
      </div>
    </section>
  );
}

export default Home;