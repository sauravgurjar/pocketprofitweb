import React from 'react';
import './input.css';
import {MarqueeDemo} from "./comp/marque";
import Header from "./comp/header";
import LandingPage from "./comp/mainfile";
import WhyUsSection from "./comp/secondheader";
// import Footer from "./comp/footer";


function App() {
  return (
      <div>

          <LandingPage/>
          <Header/>
          <WhyUsSection/>


          <MarqueeDemo/>
          {/*<Footer/>*/}
      </div>
  );
}

export default App;
