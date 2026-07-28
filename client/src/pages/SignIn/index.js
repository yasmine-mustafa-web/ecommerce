import { useContext, useEffect } from "react";
import {MyContext } from '../../App';
import Logo from '../../assets/Screenshot_2026-07-12_163830-removebg-preview.png';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const SignIn = () =>{
    const context = useContext(MyContext);

    useEffect(()=>{
        context.setisHeaderFooterShow(false);
    },[])
    return(
        <section className="signInPage justify-content-center p-0">
            <div className="container">
                <div className="card border-0 p-0 box">
                    <div className="text-center">
                        <img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg' />
                    </div>
                        
<form>
 <h4>Sign In</h4>
                     <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label  for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>   
<a className="cursor">Forgot password?</a>
<Button className="my-3 btn w-100 btn-lg bg-red text-white fw-semibold">Sign In</Button>
<p>Not registerd? <Link to='/signUp'>Sign up</Link></p>

<div className="d-flex align-items-center my-4">
  <hr className="flex-grow-1 m-0" />
  <span className="px-3 text-secondary">OR</span>
  <hr className="flex-grow-1 m-0" />
</div>
<ul className="socialsForm d-flex p-0 m-0 text-center justify-content-center gap-2">
    <li> 
    <Link  style={{ width: "90px", height: "50px" }} className="rounded-4 btn btn-outline-secondary d-flex align-items-center text-center justify-content-center" to='#'><FcGoogle/></Link> 
    </li>
    <li>
       <Link  style={{ width: "90px", height: "50px" }} className="rounded-4 btn btn-outline-secondary d-flex align-items-center text-center justify-content-center" to='#'><FaFacebookF/></Link>        

    </li>
</ul>
 </form>
              </div>
            </div>
           
        </section>
    )
}

export default SignIn;