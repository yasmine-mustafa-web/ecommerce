const orders = [
    {
        id:"#1001",
        customer:"Ahmed",
        total:"250 EGP",
        status:"Delivered"
    },
    {
        id:"#1002",
        customer:"Sara",
        total:"120 EGP",
        status:"Pending"
    },
    {
        id:"#1003",
        customer:"Yasmine",
        total:"430 EGP",
        status:"Cancelled"
    },
    { id:"#1004",
        customer:"Mohamed",
        total:"82 EGP",
        status:"Delivered"
    }
];

const RecentOrders = () => {

    return(

        <div className="recentOrders">

            <h5 className="mb-4">

                Recent Orders

            </h5>

            <table className="table align-middle">
                 <thead>

                    <tr>

                        <th>ID</th>

                        <th>Customer</th>

                        <th>Total</th>

                        <th>Status</th>

                    </tr>

                </thead>

                <tbody>
                     {
                        orders.map(order=>(
                            <tr key={order.id}>

                                <td>{order.id}</td>

                                <td>{order.customer}</td>

                                <td>{order.total}</td>

                                <td>

                                    <span className={`status ${order.status.toLowerCase()}`}>

                                        {order.status}

                                    </span>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>

    );

};

export default RecentOrders;