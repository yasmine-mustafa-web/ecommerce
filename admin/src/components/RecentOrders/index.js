const orders = [
    {
        id:"#1001",
        customer:"yasmine mustafa",
        total:"970 EGP",
        status:"Pending"
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