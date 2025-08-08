import React from 'react';
import './input.css';
import LandingPage from "./comp/mainfile";
import Header from "./comp/header";
import WhyUsSection from "./comp/secondheader";
import {MarqueeDemo} from "./comp/marque";
import Footer from "./comp/footer";


function App() {
  return (
      <div>

          {/*<UnderMaintenancePage/>*/}
          <LandingPage/>
          <Header/>
          <WhyUsSection/>


          <MarqueeDemo/>
          <Footer/>
      </div>
  );
}

export default App;
