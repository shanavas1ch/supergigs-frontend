import { Button } from 'react-bootstrap'
import  {React, useState } from 'react'
import { FaGoogle, FaLinkedinIn, FaTimes } from 'react-icons/fa'
import signinFreelancer from '../../assets/signin-Freelancer.png';
import signinHireTalent from '../../assets/signin-hire-talent.png';

function Signup() {

    const [freelancerTile, setFreelancerTile] = useState('find-gigs-tile-unclicked');
    const [hireTalentTile, setHireTalentTile] = useState('hire-talent-tile-unclicked');
    const [isVisible, setIsVisible] = useState(false);


    const freelancerTileClick = () => {
        setFreelancerTile('find-gigs-tile-clicked');
        setHireTalentTile('hire-talent-tile-unclicked');
        setIsVisible(true);
    }

    const hireTalentTileClick = () => {
        setHireTalentTile('hire-talent-tile-clicked');
        setFreelancerTile('find-gigs-tile-unclicked');
        setIsVisible(true);
    }
  return (
    <div className='container-fluid'>
       
    <div className='d-flex'>
     <div className='col-sm-8 signIn-outer-div' > 
     <div className='signIn-inner-div'> 
     <div>  <FaTimes className='closeButton cursor-pointer' />  </div>
     <h4 className='text-center signIn-font'> <strong> Sign Up </strong></h4>
     
     <h5 className='text-center'> Sign up and get access to GIG</h5>
      </div>
      <div > 

      <div className='row'> 
      <div id={freelancerTile} className="col-sm-5" onClick={freelancerTileClick}>
      <img
                src={signinFreelancer}
                alt="signinFreelancerImage"
                className="freelancerLogo img-fluid"
              />
              <p> <strong>Find gigs </strong> </p>
      </div>
      <div className='col-sm-2'> </div>
      <div id={hireTalentTile} className="col-sm-5" onClick={hireTalentTileClick}>
      <img
                src={signinHireTalent}
                alt="signinHireTalentImage"
                className="hireTalentLogo img-fluid"
              />
                <p><strong>Hire talent </strong> </p>
        </div> 
        
      </div>

    <div className={isVisible ? 'signup-visible' : 'signup-hidden'}> 

    <div className='pt-3 pb-3'> 
    <Button className="signin-button-linkedin" variant="primary">
        <FaLinkedinIn className="" /> 
                Login using LinkedIn
                </Button>

                <Button className="signin-button-google float-end" variant="primary">
                <FaGoogle className=''/>
                Login using Google
                </Button>
</div>

<p className='separator-line'><span>or</span></p>

<div> 

<form>
       
       <div className="mb-3">
         <label className='pb-1 signIn-font'> <strong> Email address</strong></label>
         <input
           type="email"
           className="form-control"
           placeholder="Enter Email Id"
         />
       </div>
       <div className="mb-3">
         <label className='pb-1 signIn-font'><strong>Password </strong></label>
         <input
           type="password"
           className="form-control"
           placeholder="Enter password"
         />
       </div>
       <div className="mb-3">
         <div className="custom-control custom-checkbox">
           
           
           <div> 
           <input
             type="checkbox"
             className="custom-control-input"
             id="customCheck1"
           />   
           <label className="custom-control-label ps-1 signIn-font" htmlFor="customCheck1">
             I agree with terms and conditions
           </label>
           </div>
          
         </div>
       </div>
       <div className="d-grid pt-2">
         <button type="submit" className="btn btn-primary button-basic signin">
           SIGN UP
         </button>

         <div> 
        <p className='text-center pt-3'> I have an account? <a href="/signin" className='signIn-font'><strong>Sign In </strong> </a></p>
      </div>
       </div>
      
     </form>
</div>
    </div>

      </div>
 </div>
 </div> 
 </div>
  )
}

export default Signup