import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const SalesChart=()=>{
     const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul"
        ],

        datasets: [
            {
                label: "Sales",

                data: [
                    1200,
                    1900,
                    1500,
                    2500,
                    3200,
                    2900,
                    4100
                ],
                  borderColor: "#4f46e5",

                backgroundColor: "rgba(79,70,229,.15)",

                fill: true,

                tension: .4
                  }
        ]
    };
      const options = {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {

                display: false

            }

        }

    };
    return(
          <div className="salesChart">

            <div className="d-flex justify-content-between mb-3">

                <h5>Sales Overview</h5>

                <button className="btn btn-sm btn-primary">
                    This Month
                </button>

            </div>

            <div style={{ height: "350px" }}>

                <Line
                    data={data}
                    options={options}
                />

            </div>

        </div>
    )
}

export default SalesChart;