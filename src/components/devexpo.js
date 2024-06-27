
import image from './img/astra.svg'

const Devexpo = () =>{
    return (
      <div className="dev">
     
         <div className='head-dev'>
         <h1>DEV EXPO</h1>
        <p>Experience the tech expo like never before.Open to all students and professionals</p>
        <a  href="mailto:mulearnucek@gmail.com"> <button className="eventbtn second" style={{top:'0',marginTop:'16px'}}>
                        <span className="btn__inner">
                            <span className="btn__slide"></span>
                            <span className="btn__content">Contact us</span>
                        </span>
                    </button></a>
         </div>
        <img src={image} alt="" />

     </div>



    );
};
export default Devexpo;