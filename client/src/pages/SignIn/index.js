    import { useContext , useState } from "react";
    import {MyContext } from '../../App';
    import { Button } from '@mui/material';
    import { Link , useNavigate } from "react-router-dom";
    import api from "../../Services/api";


    const SignIn = () =>{
        const [isLoading, setIsLoading] = useState(false);
        const [formfields , setFormfields]=useState({email: "" , password:""});


        const navigate= useNavigate();
        const context = useContext(MyContext);
        

  
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
                context.setAlertBox({
                    open:true,
                    error:true,
                    msg:"password cannot be blank"
                })
            return;
            }
    

        try{
           setIsLoading(true);
           const response= await api.post(
              "/user/signin",
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
                            <img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg' alt="" />
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

    </form>
                </div>
                </div>
            
            </section>
        )
    }
    

    export default SignIn;