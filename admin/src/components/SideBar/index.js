import { NavLink } from "react-router-dom";

import {
    MdDashboard,
    MdShoppingCart,
    MdCategory,
    MdPeople,
    MdSettings
} from "react-icons/md";

import { FaBoxOpen, FaTags } from "react-icons/fa";
const SideBar = ({ isSidebarOpen }) => {

    const menu = [
        {
            title: "Dashboard",
            icon: <MdDashboard />,
            path: "/dashboard"
        },
        {
            title: "Products",
            icon: <FaBoxOpen />,
            path: "/products"
        },
        {
            title: "Categories",
            icon: <MdCategory />,
            path: "/categories"
        },
        {
            title: "Brands",
            icon: <FaTags />,
            path: "/brands"
        },
        {
            title: "Orders",
            icon: <MdShoppingCart />,
            path: "/orders"
        },
        {
            title: "Customers",
            icon: <MdPeople />,
            path: "/customers"
        },
        {
            title: "Settings",
            icon: <MdSettings />,
            path: "/settings"
        }
    ];

    return (
        <aside className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`}>

            <ul>

                {
                    menu.map((item, index) => (

                        <li key={index}>

                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >

                                <span className="icon">
                                    {item.icon}
                                </span>

                                <span className="text">
                                    {item.title}
                                </span>

                            </NavLink>

                        </li>

                    ))
                }

            </ul>

        </aside>
    );
};

export default SideBar;