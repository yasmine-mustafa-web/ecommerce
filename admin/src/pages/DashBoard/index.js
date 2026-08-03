import DashboardCards from "../../components/DashboardCards";
import SalesChart from "../../components/SalesChart";

import {
    FaBoxOpen,
    FaShoppingCart,
    FaUsers,
    FaDollarSign
} from "react-icons/fa";


const DashBoard = () =>{
    const cards = [
    {
        title: "Products",
        value: 1250,
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

    </div>

</div>

</div>
)}

export default DashBoard;