import { useContext, useEffect , useState } from "react";
import {MyContext } from '../../App';
import { Button } from '@mui/material';
import { Link , useNavigate } from "react-router-dom";
import api from "../../Services/api"; 

const egyptianPhoneRegex = /^(010|011|012|015)\d{8}$/;

const SignUp = () =>{
    const [, setInputIndex] = useState();
    const [ isLoading , setIsLoading] = useState(false);
    const [formfields , setFormfields] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      phone:"",
    })

    const navigate = useNavigate();

    const context = useContext(MyContext);

    useEffect(() => {
    window.scrollTo(0,0);
    }, []);

    const focusInput = (index) => {
      setInputIndex(index);
    }

    const onchangeInput = (e) =>{
      const {name , value} = e.target
      setFormfields((prev)=> ({
        ...prev,
        [name]: value
      }))
    }

    const signUp = async (e) => {
      e.preventDefault();
      
        if (formfields.firstName.trim() === ""){
          context.setAlertBox({
            open:true,
            error:true,
            msg:"first name cannot be blank"
          });
          return;
        }

        if (formfields.lastName.trim() === ""){
          context.setAlertBox({
            open:true,
            error:true,
            msg:"last name cannot be blank"
          });
          return;
        }
        
        if (formfields.email.trim() === ""){
          context.setAlertBox({
            open:true,
            error:true,
            msg:"email cannnot be blank"
          });
          return;
        }
         if (formfields.password.trim() === ""){
          context.setAlertBox({
            open:true,
            error:true,
            msg:"password cannnot be blank"
          });
          return;
        }
        const cleanPhone=formfields.phone.trim().replace(/[\s-]/g, '');
        if(!cleanPhone){
          context.setAlertBox({open:true, error:true , msg:"Phone cannot be blank"});
          return;
        }
        if (!egyptianPhoneRegex.test(cleanPhone)) {
        context.setAlertBox({
          open: true,
          error: true,
          msg: "Please enter a valid Egyptian phone number (e.g., 010xxxxxxxx)"
        });
        return;
      }
        try{
          setIsLoading(true);
        
          const response = await api.post(
             "/user/signup",{
             ...formfields,
             phone: cleanPhone}
          )

        console.log(response.data);

        context.setAlertBox({
          open:true,
          error:false,
          msg:"Account created successfully"
        })
        localStorage.setItem("token", response.data.token);
        context.setIsLogin(true);
        navigate('/');
        }catch(err) {
            console.error("SIGNUP ERROR:", err); 
            context.setAlertBox({
            open:true,
            error:true,
            msg: err?.response?.data?.msg || err?.response?.data?.message || "smth went wrong"
          })
        }finally{
          setIsLoading(false);
        }
    }
    return(
        <section className="signInPage justify-content-center p-0">
            <div className="container">
                <div className="card border-0 p-0 box m-0">
                    <div className="text-center">
                        <img src='https://img.freepik.com/premium-vector/pharmacy-logo-vector_23987-171.jpg'alt="" />
                    </div>
                        
<form className="m-0 p-0" onSubmit={signUp}>
 <h4>Sign Up</h4>
 <div className="input-group">
  <span className="input-group-text">First and last name</span>
  <input type="text" name="firstName"  onChange={onchangeInput}
                                onFocus={() => focusInput(0)} value={formfields.firstName} aria-label="First name" className="form-control"/>
  <input type="text" name="lastName"  onChange={onchangeInput}
                                onFocus={() => focusInput(1)} value={formfields.lastName} aria-label="Last name" className="form-control"/>
</div>
<div className="form-floating">
  <input type="tel" name="phone"  onChange={onchangeInput}
                                onFocus={() => focusInput(2)} value={formfields.phone} className="form-control" id="phone" placeholder="Phone Number"/>
  <label htmlFor="phone">Phone Number</label>
</div> 
<div className="form-floating mb-3">
  <input name="email" value={formfields.email}  onChange={onchangeInput}
                                onFocus={() => focusInput(3)} type="email" className="form-control" id="email" placeholder="name@example.com"/>
  <label  htmlFor="email">Email address</label>
</div>
<div className="form-floating">
  <input type="password" name="password" value={formfields.password}  onChange={onchangeInput}
                                onFocus={() => focusInput(4)} className="form-control" id="password" placeholder="Password"/>
  <label htmlFor="password">Password</label>
</div>   
<Button type="submit" disabled={isLoading} className="my-3 btn w-100 btn-lg bg-red text-white fw-semibold">
 {isLoading ? "Signing Up..." : "Sign Up"}
  </Button>
<p>Already registerd? <Link to='/signIn'>Sign In</Link></p>


 </form>
              </div>
            </div>
           
        </section>
    )
}

export default SignUp;