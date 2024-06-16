import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import SponsorshipPerks from "./components/perks";
import Partner from './components/why'
const Sponsor = ()=>{
    return(
        <div style={{background:"#0f1923"}}>
        <Navbar/>
        <Partner/>
        <SponsorshipPerks/>
        <hr style={{width:"100%",border: '0.5px solid  rgb(15, 25, 45)',color:'white'}}></hr>
        <Footer/>
        </div>


    )
}
export default Sponsor;