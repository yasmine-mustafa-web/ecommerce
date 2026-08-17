import { NavLink } from "react-router-dom";

import {
    MdDashboard,
    MdCategory,
} from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { FaBoxOpen} from "react-icons/fa";
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
            icon: <IoIosAdd/>,
            path: "/products/add"
        },{
            title:"Categories",
            icon:<MdCategory/>,
            path:"/categories"
        },{
            title:"Add Categories",
            icon:<IoIosAdd/>,
            path:"/categories/add"
        }

    ];

    return (
        <aside className={`sidebar ${isSidebarOpen ? "" : "collapsed"}`} aria-label="Main navigation">
            <div className="sidebar-brand">
                <span className="brand-icon">🛒</span>
                {isSidebarOpen && <span className="brand-text">Admin Panel</span>}
            </div>
            <ul>

                {
                    menu.map((item, index) => (

                        <li  title={!isSidebarOpen ? item.title : undefined} key={index}>

                            <NavLink
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                aria-label={item.title}
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