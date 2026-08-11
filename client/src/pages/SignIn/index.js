    import { useContext, useEffect, useState } from "react";
    import {MyContext } from '../../App';
    import { Button } from '@mui/material';
    import { Link , useNavigate } from "react-router-dom";
    import { FcGoogle } from "react-icons/fc";
    import { FaFacebookF } from "react-icons/fa";
    import axios from "axios";


    const SignIn = () =>{
        const [inputIndex , setInputIndex]=useState();
        const [isLoading, setIsLoading] = useState(false);
        const [formfields , setFormfields]=useState({email: "" , password:""});


        const navigate= useNavigate();
        const context = useContext(MyContext);
        


        useEffect(()=>{
            window.scrollTo(0,0);
            context.setisHeaderFooterShow(false);
            return () => {
            context.setisHeaderFooterShow(true);
        };
        },[context])

        const focusInput = (index) =>{
            setInputIndex(index)
        }   

        const onchangeInput = (e) =>{
            const{name,value}=e.target;
            setFormfields((prev) => ({
                ...prev,[name]:value
            }))
        }

        const signIn = async(e) =>{
            e.preventDefault();

            if(formfields.email.trim()===""){
                context.setAlertBox({
                    open:true,
                    error:true,
                    msg:"email cannot be blank"
                })
            return;
            }
            if(formfields.password.trim()===""){
                context.setAlarmBox({
                    open:true,
                    error:true,
                    msg:"password cannot be blank"
                })
            return;
            }
    

        try{
           setIsLoading(true);
           const response= await axios.post(
              "http://localhost:4000/api/user/signin",
              formfields
           );

       

           context.setAlertBox({
            open:true,
            error:false,
            msg:"signed in successfully"
           })
           localStorage.setItem("token", response.data.token);
           context.setIsLogin(true);
           navigate('/')
        }catch(err){
            console.log('SIGNIN ERROR:' , err);
            context.setAlertBox({
                open:true,
                error:true,
                msg:err?.response?.data?.msg || "smth went wrong"
            })
        }finally{
            setIsLoading(false);
        }
    }

        return(
            <section className="signInPage justify-content-center p-0">
                <div className="container">
                    <div className="card border-0 p-0 box">
                        <div className="text-center">
                            <img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg' />
                        </div>
                            
    <form onSubmit={signIn}>
    <h4>Sign In</h4>
                        <div className="form-floating mb-3">
    <input type="email"     value={formfields.email} onChange={onchangeInput} required name="email" className="form-control" id="email" placeholder="name@example.com"/>
    <label  htmlFor="email">Email address</label>
    </div>
    <div className="form-floating">
    <input type="password" value={formfields.password} onChange={onchangeInput} required  className="form-control" id="password" name="password" placeholder="Password"/>
    <label htmlFor="password">Password</label>
    </div>   
    <a className="cursor">Forgot password?</a>
    <Button disabled={isLoading} className="my-3 btn w-100 btn-lg bg-red text-white fw-semibold" type="submit">
         {isLoading ? "Signing In..." : "Sign In"}
    </Button>
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