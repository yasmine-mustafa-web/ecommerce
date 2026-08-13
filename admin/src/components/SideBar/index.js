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
            title: "Add Products",
            icon: <MdCategory />,
            path: "/products/add"
        },
        {
            title: "Customers",
            icon: <MdPeople />,
            path: "/customers"
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