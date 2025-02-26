import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

   const [values, setvalues] = useState({email:"",password:"",name:"parth"})


   const navigater=useNavigate()
   const handlechange=(value,label)=>{
    setvalues((pre)=>({
        ...pre,
        [label]:value
    }))
   }


   console.log("sdffgsdfsd",values)
   const handlelogin=()=>{
    if(values.email=="" || values.email==undefined || values.password=="" || values.password==undefined){
        alert("Please fill all fields") 
    }else 
        if(values.email=="parth@gmail.com" && values.password=="123123"){
            localStorage.setItem("Profile",JSON.stringify(values))
            alert("successfully login");
            navigater("/profile")
        }else{
          alert("Invalid Credentials")
        }
    
   }

   const handleclick=()=>{
    navigater("/")
   }
  return (
    <div className='loginmain'>
      <div onClick={()=>handleclick()} style={{display:"flex",position:"absolute",top:"20%",left:"20%"}}>
        Back
      </div>
      <h3>LoginPage</h3>
      <form style={{display:"flex",flexDirection:"column",gap:"10px"}}>
         <div className='formdetail'>
            <label>email:</label>
            <input type='email' placeholder='Login' onChange={(e)=>handlechange(e.target.value,"email")}/>
         </div>
         <div className='formdetail'>
            <label>password:</label>
            <input type='text' placeholder='password' onChange={(e)=>handlechange(e.target.value,"password")}/>
         </div>
         <div className='formdetail'>
            <button type='submit' onClick={()=>handlelogin()}>Login</button>
         </div>
      </form>
    </div>
  )
}

export default LoginPage
