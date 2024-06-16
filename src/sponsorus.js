import Navbar from "./components/Navbar"
import SponsorshipPerks from "./components/perks";
import Partner from './components/why'
const Sponsor = ()=>{
    return(
        <div style={{background:"#0f1923",height:'300vh'}}>
        <Navbar/>
        <Partner/>
        <SponsorshipPerks/>
        </div>


    )
}
export default Sponsor;