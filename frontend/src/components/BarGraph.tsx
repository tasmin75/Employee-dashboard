import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "previous Year",
      data: [
        12000, 10000, 2000, 2780, 1890, 2390, 3490, 3490, 3090, 3490, 3390,
        3440,
      ],
      backgroundColor: "blue",
    },
    {
      label: "Current Year",
      data: [
        10000, 9098, 9800, 3908, 4800, 3800, 4300, 4400, 4300, 4600, 4380, 4200,
      ],
      backgroundColor: "#ccc",
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const BarGraph = () => {
  return (
    <div style={{ padding: "10px", maxWidth: "900px", margin: "auto" }}>
      <Bar data={barData} options={barOptions} />
    </div>
  );
};

export default BarGraph;
