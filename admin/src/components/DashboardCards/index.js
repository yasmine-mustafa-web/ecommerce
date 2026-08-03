

const DashboardCards=({ title, value, icon, color })=>{
    return(
         <div className="dashboardCard">

            <div
                className="iconBox"
                style={{ background: color }}
            >
                {icon}
            </div>

            <div className="info">

                <h5>{title}</h5>

                <h2>{value}</h2>

            </div>

        </div>
    )
}

export default DashboardCards;