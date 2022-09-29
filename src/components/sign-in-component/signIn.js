import React from 'react'
import { Button } from 'react-bootstrap'
import { FaLinkedinIn, FaGoogle, FaTimes } from 'react-icons/fa'
import signinBannerImg from "../../assets/signin-banner-img.png";

function SignIn() {
  return (
    <div className='container-fluid'>
       
       <div className='d-flex'>
        <div className='col-sm-4 signIn-left ps-5 '>
             <div className='signinImage-div '>
                
            <div className="">
              <img
                src={signinBannerImg}
                alt="signinBannerImage1"
                className="signinBannerImage "
              />
            </div>
            
             </div>
            <div className='text-center w-75 text-white font-weight-bold'> <strong> Work with high-quality, curated talent and get more done!</strong></div>
            <div className='text-center w-75 text-white'> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et</p></div>
             </div>


        <div className='col-sm-8 signIn-outer-div' > 
        
       
        <div className='signIn-inner-div'> 
        <div>  <FaTimes className='closeButton cursor-pointer' />  </div>
        <h4 className='text-center signIn-font'> <strong> Sign In </strong></h4>
        
        <h5 className='text-center'> Sign in and get access to GIG</h5>

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
              Remember me
            </label>
            <p className="forgot-password text-right float-end">
          <a href="#" className='signIn-font'> Forgot password?</a>
        </p>
            </div>
           
          </div>
        </div>
        <div className="d-grid pt-2">
          <button type="submit" className="btn btn-primary button-basic signin">
            SIGN IN
          </button>
        </div>
       
      </form>
      <div> 
        <p className='text-center pt-3'> Don't have an account? <a href="/signup" className='signIn-font'><strong>Sign Up </strong> </a></p>
      </div>
        </div>
        </div>
        </div>
        
         </div>
    </div>
  )
}

export default SignIn