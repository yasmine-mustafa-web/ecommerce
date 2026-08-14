import {useContext , useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import api from "../../Services/api";

const Checkout = () =>{
const {cart , cartTotal , clearCart , isLogin , setAlertBox} = useContext(MyContext);
const navigate = useNavigate();
const [form,setForm] = useState({name:"" , phone:"" , address:""});
const [loading, setLoading] = useSate(false);

if(!cart.lenght) return <div className="container py-5 text-center"><h3>Your Cart is empty</h3></div>
 
    const submit = async e => {
        e.preventDefault();
        if(!isLogin)
        {navigate('/signIn');
        return;
    }
    try{
        setLoading(true);
        await api.post("/orders" , {
            customerName:form.name , phone:form.phone , address:form.address,
            items:cart.map(i => ({product:i._id , quantity:i.quantity})),
            total:cartTotal
        });
        clearCart();
        setAlertBox({open:true , error:false , msg:"Order placed successfully!"});
        navigate("/")
    }catch(err){
        setAlertBox({
            open:true,
            error:true,
            msg:err.response?.data?.message 
            || "couldn't place order"
        });
    }finally{
        setLoading(false);
    }
    }
 
    return(
        <section className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <h2>Checkout</h2>
                    {!isLogin && <div className="alert alert-warning">Please sign in before placing your order</div>}
                    <form onSubmit={submit} className="card p-4">
                        <input 
                        className="form-control mb-3" 
                        required
                        placeholder="Full name"
                        value={form.name}
                        onChange={e=>setForm({...form,name:e.target.value})}
                        />
                        <input
                        className="form-control mb-3"
                        required
                        placeholder="Phone"
                        value={form.phone}
                        onChange={e=>setForm({...form,phone:e.target.value})}
                        />
                        <textarea className="form-control mb-3" required placeholder="Delivery address" rows="4" value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/>
                        <div className="d-flex justify-content-between mb-3"><b>Total</b><b>EGP {cartTotal.toFixed(2)}</b></div>
                        <button className="btn bg-red text-white" disabled={loading}>{loading ? "Placing order..." : "Place order"}</button>
                        </form>
                </div>
            </div>
        </section>
    );
};

export default Checkout;