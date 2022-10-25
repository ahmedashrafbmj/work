
import { Button, TextField } from '@mui/material';
import { signUpUser } from '../config/firebasemethods';

import { Box } from '@mui/system';

import { useState } from 'react';

function Signup ()  {

let signUp =()=>{


  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")


  signUpUser(email,password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

}

  return (
    <>
    <Box>
      <h1>Signup page</h1>

      <TextField label="Email" variant='standard' onChange={(e)=>setEmail(e.target.value)}/>
      </Box>
      <Box>
      <TextField label="Email" type="password" variant='standard' onChange={(e)=>setPassword(e.target.value)}/>

      <Button variant='contained' onClick={signUp}>SignUp</Button>
      </Box>
    </>
  )
}

export default Signup
