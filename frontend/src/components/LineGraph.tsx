import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [12000, 10000, 2000, 2780, 1890, 2390, 3490, 3490, 3490, 3490, 3490, 3490],
      borderColor: 'blue',
      backgroundColor: 'rgba(130, 202, 157, 0.5)',
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
   
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineGraph = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <Line data={data}
        options={options}
       />
    </div>
  );
};

export default LineGraph;
