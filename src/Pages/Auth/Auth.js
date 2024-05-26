import React, { useState,useContext } from 'react'
import classes from "./Auth.module.css"
import {Link, useNavigate, useLocation } from 'react-router-dom'
import {auth} from "../../Utility/firebase"
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import {ClipLoader } from "react-spinners"

import {DataContext} from "../../component/DataProvider/DataProvider" 
import { Type } from '../../Utility/action.type'

function Auth() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const [error,setError] =useState("");
  const [loading,setLoading] =useState({
    signIn: false,
    signUp: false
  })
  const [{user}, dispatch]=useContext(DataContext)
  const navigate =useNavigate();
  const navStateData = useLocation()
  console.log(navStateData);



console.log(user);
  const authHandler =(e)=>{
    e.preventDefault()
    console.log(e.target.name);
    if (e.target.name =="signin"){
      // firebase auth
      setLoading({...loading, signIn:true})
        signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
        
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          })
          setLoading({...loading, signIn:false})
          navigate(navStateData?.state?.redirect || "/")
        }).catch((err)=>{
          setError(err.message);
          setLoading({...loading, signIn:false})
        })
    }else{
      setLoading({...loading,signUp:true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        
          dispatch({
            type:Type.SET_USER,
            user:userInfo.user
          })
          setLoading({...loading,signUp:false})
          navigate(navStateData?.state?.redirect || "/")
      }).catch((err)=>{
        setError(err.message);
        setLoading({...loading,signUp:false})
      })

    }
  }
  return (
   
      <section className={classes.login}>
        <Link>
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_logo_icon_169612.png" alt="" />
        
        </Link>
        <div className={classes.login_container}>
          <h1>Sign In</h1>
          {
            navStateData?.state?.msg && (
              <small style={
                {
                  padding: "5px",
                  textAlign: "center",
                  color: "red",
                  fontWeight: "bold",
                }
              }
              >
                {navStateData?.state?.msg}
                
              </small>
            )

          }
          <form action="">

            <div>
              <label htmlFor="">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email'/>
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" id='password' />
            </div>
            <button type='submit' onClick={authHandler} name='signin' className={classes.login_signinbutton}>
              {/* spinner conditions */}
              {
                loading.signIn ? (<ClipLoader color="#000" size={15}></ClipLoader>) : (
                  "Sign In"
                )
              } 
              </button>
            
          </form>
          {/* agreement */}
          <p>By signing-in you agree to the AMAZON FAkE CLONE conditions of Use & 
            Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice
          </p>
          <button type='submit' onClick={authHandler} name='signup' className={classes.login_registerButton}>
              {/* spinner conditions */}
              {
                loading.signUp ? (<ClipLoader color="#000" size={15}></ClipLoader>) : (
                  "Create Your AMazon Account"
                )
              } 
            
            </button>
          {
            error && <small style={{paddingTop:"5px", color:"red"}}>{error}</small> 
          }
        </div>

      </section>
    
  
  )
}

export default Auth