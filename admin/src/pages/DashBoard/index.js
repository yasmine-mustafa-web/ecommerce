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
    useEffect(() => {
    getProducts().then(res => setProductCount(res.data.length)).catch(console.log);
}, []);
    const cards = [
    {
        title: "Products",
        value:  productCount,
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
<div className="container-fluid" style={{padding:"80px"}}>

    <div className="row">

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

    <div className="row">

    <div className="col-lg-8">

        <SalesChart />

    </div>

    <div className="col-lg-4">
          <TopProducts />
    </div>
<div className="row mt-4">

    <div className="col-12">

        <RecentOrders />

    </div>

</div>
</div>

</div>
)}

export default DashBoard;