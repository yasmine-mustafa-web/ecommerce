import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import api from "../../Services/api";

const MyOrders = () => {
  const { setAlertBox } = useContext(MyContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await api.get("/orders/mine");
        setOrders(res.data);
      } catch (err) {
        console.log("GET ORDERS ERROR:", err);

        setAlertBox({
          open: true,
          error: true,
          msg:
            err.response?.data?.message ||
            "Could not load your orders",
        });
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [setAlertBox]);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <h4>Loading orders...</h4>
      </div>
    );
  }

  return (
    <section className="container py-5">
      <h2 className="mb-4">My Orders</h2>

      {!orders.length ? (
        <div className="text-center py-5">
          <h4>You haven't placed any orders yet.</h4>

          <Link to="/" className="btn bg-red text-white mt-3">
            Start Shopping
          </Link>
        </div>
      ) : (
        orders.map((order) => (
          <div className="card mb-4 p-4" key={order._id}>
            
            <div className="d-flex justify-content-between mb-3">
              <div>
                <h5>Order #{order._id.slice(-6)}</h5>
                <small className="text-secondary">
                  {new Date(order.createdAt).toLocaleString()}
                </small>
              </div>

              <span className="badge bg-warning text-dark align-self-start">
                {order.status}
              </span>
            </div>

            <hr />

            {order.items.map((item) => (
              <div
                key={item._id}
                className="d-flex align-items-center gap-3 mb-3"
              >
                <img
                  src={item.product?.images?.[0]}
                  alt={item.product?.name}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />

                <div>
                  <h6>{item.product?.name}</h6>

                  <p className="mb-1">
                    Quantity: <b>{item.quantity}</b>
                  </p>

                  <p className="mb-0">
                    Price: <b>EGP {item.price}</b>
                  </p>
                </div>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <div>
                <p className="mb-1">
                  <b>Name:</b> {order.customerName}
                </p>

                <p className="mb-1">
                  <b>Phone:</b> {order.phone}
                </p>

                <p className="mb-0">
                  <b>Address:</b> {order.address}
                </p>
              </div>

              <div className="text-end">
                <small>Total</small>
                <h4>EGP {order.total.toFixed(2)}</h4>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
};

export default MyOrders;