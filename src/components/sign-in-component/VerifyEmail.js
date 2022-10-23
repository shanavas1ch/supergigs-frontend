import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';


function VerifyEmail() {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get('t')); // ▶ URLSearchParams {}
    let verificationToken = searchParams.get('t')

  useEffect(() => {

    fetch("http://localhost:3500/verify",{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({token:verificationToken})
    } )
    .then((res) => {res.json()})
    .then((res)=>{

        console.log(res);
    })
    
  })  
  return (
    <div>VerifyEmail</div>
  )
}

export default VerifyEmail