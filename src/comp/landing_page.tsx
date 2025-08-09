import LandingPage from "./mainfile";
import Header from "./header";
import WhyUsSection from "./secondheader";
import {MarqueeDemo} from "./marque";


export function Landing(){
    return(
        <div>
            <LandingPage/>
            <Header/>
            <WhyUsSection/>
            <MarqueeDemo/>
        </div>
    )
}