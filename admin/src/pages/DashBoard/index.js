import DashboardCards from "../../components/DashboardCards";
import SalesChart from "../../components/SalesChart";
import TopProducts from "../../components/TopProducts";
import RecentOrders from "../../components/RecentOrders";
import { useEffect, useState } from "react";
import { getProducts } from "../../Services/productApi";
import { getCategories } from "../../Services/categoryApi";
import {
FaBoxOpen,
FaShoppingCart,
FaUsers,
FaDollarSign
} from "react-icons/fa";


const DashBoard = () =>{
    const [productCount, setProductCount] = useState(0);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);
    

    useEffect(() => {
    getProducts()
    .then(res => setProductCount(res.data.length))
    .catch(err =>{
    console.log(err);
    setError("couldn't load products count");
    }).finally(() => setLoading(false))}
    , []);


    const cards = [
    {
        title: "Products",
        value:  loading ? "..." : productCount ,
        icon: <FaBoxOpen />,
        color: "#4f46e5"
    },
    {
        title: "Orders",
        value: 321,
        icon: <FaShoppingCart />,
        color: "#06b6d4"
    },
    {
        title: "Users",
        value: 852,
        icon: <FaUsers />,
        color: "#22c55e"
    },
    {
        title: "Revenue",
        value: "$24,500",
        icon: <FaDollarSign />,
        color: "#f97316"
    }
];
return(
<div className="container-fluid">
<h2 className="mb-4 fw-semibold">Dashboard</h2>
{error && (
    <div className="alert alert-warning py-2" role="alert">
        {error}
    </div>
)}
    <div className="row g-4 mb-4">

        {
            cards.map((card,index)=>(

                <div
                    className="col-lg-3 col-md-6 mb-4"
                    key={index}
                >

                    <DashboardCards
                        title={card.title}
                        value={card.value}
                        icon={card.icon}
                        color={card.color}
                    />

                </div>

            ))
        }

    </div>

    <div className="row g-4 mb-4">

    <div className="col-lg-8">

        <SalesChart />

    </div>

    <div className="col-lg-4">
          <TopProducts />
    </div>
    </div>
<div className="row g-4">

    <div className="col-12">

        <RecentOrders />

    </div>
    </div>

</div>

)}

export default DashBoard;