import Card from "../components/Card";
import UserIcon from "../assets/icons/user_icon";
import LineGraph from "../components/LineGraph";
import BarGraph from "../components/BarGraph";
import { useEffect, useState } from "react";
import { API_URL } from "../api/api";

const Dashboard = () => {
  const [data,setData]=useState(0)
  const [avarageSalary, setAverageSalary] = useState(0)
  const [totalDeveloper, setTotalDeveloper] = useState(0)
  const [totalHr, setTotalHr] = useState(0)

  
  const fetchData = async () => {
    const response = await fetch(`${API_URL}/employee`);
    const data = await response.json();
    setData(data.length);
    const average =data?.reduce((acc,item)=>{
      return acc+(parseInt(item.salary) || 0)
    },0)
    setAverageSalary(average/data.length)
    const developer = data?.filter((item:any)=>item.department === 'Developer')
    setTotalDeveloper(developer.length)

    const totalHr = data?.filter((item:any)=>item.department === 'Human Resource')
  setTotalHr(totalHr.length)
  };


useEffect(() => {
  fetchData()
}, [])


  return (
    <div className="p-4 sm:mr-10 mr-2 h-[100vh] sm:h-[92vh] overflow-visible sm:overflow-y-auto no-scrollbar">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Card
          title="Total Employee"
          total={data}
          icon={<UserIcon />}
        />
        <Card title="Average Salary" total={avarageSalary} icon={<UserIcon />} />
        <Card title="Total Developer" total={totalDeveloper} icon={<UserIcon />} />
        <Card title="Total HR" total={totalHr} icon={<UserIcon />} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-1 md:gap-4 xl:grid-cols-2 2xl:gap-6 mt-7">
        <div className="border-2 p-5 rounded-lg">
          <div className="flex justify-between">
            <p className="font-semibold text-lg">Employee Trained</p>
          </div>
          <LineGraph />
        </div>
        <div className="border-2 p-5 rounded-lg">
          <div className="flex justify-between">
            <p className="font-semibold text-lg">
              Assigned Training Completion Rate
            </p>
            <div>
              <div className="flex">
                <input
                  type="radio"
                  name="hs-default-radio"
                  id="hs-default-radio"
                />
                <label className="text-sm text-gray-800 ms-2 dark:text-neutral-400">
                  Current Year
                </label>
              </div>
              <div className="flex">
                <input
                  type="radio"
                  name="hs-default-radio"
                  id="hs-checked-radio"
                />
                <label className="text-sm text-gray-800 ms-2 dark:text-neutral-400">
                  Previous Year
                </label>
              </div>
            </div>
          </div>
          <BarGraph />
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
