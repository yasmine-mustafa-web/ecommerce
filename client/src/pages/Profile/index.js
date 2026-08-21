import { useEffect , useState , useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import api from "../../Services/api";

function getCurrentUserId(){
    try{
        const token=localStorage.getItem("token");
        if(!token){
            return null;
        }
        const payload = JSON.parse(atob(token.split(".")[1]));
        return payload.id || null;
    }catch{
        return null;
    }
}

const OrderCard=({order}) =>(
    <div className="card mb-4 p-4" key={order._id}>
        <div className="justify-content-center d-flex mb-3">
            <div>
                <h5>Order #{order._id.slice(-6)}</h5>
                <small className="text-secondary">
                    {new Date(order.createdAt).toLocaleString()}
                </small>
            </div>
            <span className="badge bg-warning align-self-start text-dark">
                {order.status}
            </span>
        </div>
        <hr/>
        {order.items.map((item) =>(
            <div key={item._id} className="d-flex align-items-center gap-3 mb-3">
                <img src={item.product?.images?.[0]} alt={item.product?.name} style={{height:"80px" , width:"80px" , objectFit:"contain"}}/>
            <div>
                <h6>{item.product?.name}</h6>
                <p className="mb-1">
                    Quantity:<b>{item.quantity}</b>
                </p>
                <p className="mb-0">
                    price:<b>EGP {item.price}</b>
                </p>
            </div>
            </div>

        ))}
        <hr/>
        <div className="d-flex justify-content-between">
            <div>
                <p className="mb-1"><b>Name:</b> {order.customerName}</p>
                <p className="mb-1"><b>Phone:</b> {order.phone}</p>
                <p className="mb-0"><b>Address:</b> {order.address}</p>
            </div>
            <div className="text-end">
                {order.subtotal !== undefined && (
                    <>
                    <small> subtotal</small>
                    <p className="mb-1">EGP {order.subtotal.toFixed(2)}</p>
                    </>
                )}
                {order.discount > 0 &&(
                    <p className="mb-1 text-success">Discount: -EGP {order.discount.toFixed(2)}</p>
                )}
                {order.shippingCost !== undefined &&(
                    <p className="mb-1">
                    Shipping:{" "}
                    {order.shippingCost > 0
                    ? `EGP ${order.shippingCost.toFixed(2)}`
                    : "Free"}
                    </p>
                )}
                <small>Total</small>
                <h4>EGP {(order.total??0).toFixed(2)}</h4>
            </div>
        </div>
    </div>
);
const Profile=()=>{
const { isLogin, setAlertBox } = useContext(MyContext);
const [user, setUser] = useState(null);
const [orders, setOrders] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
const load = async () => {
const userId = getCurrentUserId();
if (!isLogin || !userId) {
setLoading(false);
return;
}try{
    const [userRes , ordersRes]=await Promise.all([
        api.get(`/user/${userId}`),
        api.get("/orders/mine")
    ])
    setUser(userRes.data);
    setOrders(ordersRes.data);
}catch(err){
    setAlertBox({
        open:true,
        error:true,
        msg:err.response?.data?.message || "Couldn't load profile"
    })
}finally{
    setLoading(false);

}
};
load();
},[isLogin , setAlertBox]);
if(!isLogin){
    return(
        <div className="container py-5 text-center">
            <h4>Please sign in to view your profile</h4>
            <Link to="/signIn" className="btn bg-red text-white mt-3">
            Sign in
           </Link>
        </div>
    )
}
if(loading){
    return(
        <div className="container py-5 text-center">
        <h4>Loading profile...</h4>
        </div>
    )
}
return (
    <section className="container py-5">
      {user && (
        <div className="card p-4 mb-4">
          <h3 className="mb-1">
            {user.firstName} {user.lastName}
          </h3>
          <p className="mb-1 text-secondary">{user.email}</p>
          <p className="mb-0 text-secondary">{user.phone}</p>
        </div>
      )}

      <h2 className="mb-4">Order History</h2>

      {!orders.length ? (
        <div className="text-center py-5">
          <h4>You haven't placed any orders yet.</h4>
          <Link to="/" className="btn bg-red text-white mt-3">
            Start Shopping
          </Link>
        </div>
      ) : (
        orders.map((order) => <OrderCard key={order._id} order={order} />)
      )}
    </section>
  );
};

export default Profile;