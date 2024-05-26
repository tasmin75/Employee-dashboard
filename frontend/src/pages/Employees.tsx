import React, { useEffect, useState } from "react";
import { FiEdit, FiSearch } from "react-icons/fi";
import DataTable from "../components/DataTable";
import Button from "../components/Button";
import { GoPlus } from "react-icons/go";
import { API_URL } from "../api/api";
import AddEmployee from "../components/forms/AddEmployee";
import { RiDeleteBinLine } from "react-icons/ri";
import EditEmployee from "../components/forms/EditEmployee";

const Employees: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [data, setData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [department, setDepartment] = useState("");


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fetchData = async () => {
    const response = await fetch(`${API_URL}/employee`);
    const data = await response.json();
    setData(data);
    setFilteredData(data);
  };

  const handleEditEmployee = (items: React.SetStateAction<{}>) => {
    setModalType("edit");

    setSelectedEmployee(items);
    openModal();
  };


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search !== "") {
      const filteredData = data.filter((items: any) => {
        return items.employeeName.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [search, data]);


  useEffect(() => {
    if (department !== "All") {
      const filteredData = data.filter((items: any) => {
        return items.department.toLowerCase().includes(department.toLowerCase());
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(data); 
    }
  }, [department, data]);

  useEffect(() => {
    if (sort === "A-Z") {
      const sortedData = [...filteredData].sort((a: any, b: any) =>
        a.employeeName.localeCompare(b.employeeName)
      );
      setFilteredData(sortedData);
    } else if (sort === "Z-A") {
      const sortedData = [...filteredData].sort((a: any, b: any) =>
        b.employeeName.localeCompare(a.employeeName)
      );
      setFilteredData(sortedData);
    }
  }, [sort, filteredData]);

 


  

  const handleDeleteEmployee = async (id: string) => {
    try {
      const response = await fetch(`${API_URL}/employee/delete/${id}`, {
        method: "PUT",
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      console.log(resData);
      
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };



  const columns = [
    "SN",
    "Employee Name",
    "Department",
    "Position",
    "Salary",
    "Address",
    "Action",
  ];

  const finalData = filteredData.map((items, index) => {
    return {
      SN: index + 1,
      "Employee Name": items.employeeName,
      Department: items.department,
      Position: items.position,
      Salary: items.salary,
      Address: items.address,
      Action: (
        <div className="flex gap-2 justify-center">
          <button onClick={() => handleEditEmployee(items)}>
            <FiEdit className="text-blue-800 text-base" />
          </button>
          <button
            className="text-red-500"
            onClick={() => handleDeleteEmployee(items._id)}
          >
            <RiDeleteBinLine className="text-red-500 text-base" />
          </button>
        </div>
      ),
    };
  });

  const handleAddEmployee = () => {
    setModalType("add");
    openModal();
  };

  return (
    <section className="mx-auto w-full px-4 py-4">
      <h1 className="sm:text-3xl text-xl font-bold sm:mb-8 mb-4">Employee</h1>
      <div className="flex justify-between items-start gap-4 ">
        <div className="flex sm:flex-row flex-col gap-2 sm:gap-4 items-center">
          <div className="flex gap-2 items-center border border-1 border-gray-300 py-2 px-4 rounded-lg">
            <FiSearch className="text-gray-500" />
            <input type="text" 
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
             className="outline-none" />
          </div>
         <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          name="department"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          >
          <option value="All">Select by Department</option>
          <option value="Delevoler">Delevoler</option>
          <option value="Teacher">Teacher</option>
          <option value="Human Resource">Human Resource</option>
         </select>

          <select
            className="border border-gray-300 rounded-lg px-4 py-2"
            name="sort"
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="All">Sort by A-Z</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
         
        </div>
        <Button onClick={handleAddEmployee}>
          <GoPlus className="font-semibold text-base" /> Add Employee
        </Button>
      </div>
      <DataTable columns={columns} data={finalData} itemsPerPage={10} />

      {isModalOpen && (
        <div className="fixed inset-0 z-999 overflow-x-hidden overflow-y-auto bg-opacity-50 bg-gray-900">
          <div className="flex items-center justify-center min-h-screen">
            <div className="w-full sm:max-w-3xl m-3 bg-white border shadow-sm rounded-xl">
              {modalType === "add" && (
                <AddEmployee closeModal={closeModal} fetchData={fetchData} />
              )}
              {modalType === "edit" && (
                <EditEmployee
                  closeModal={closeModal}
                  fetchData={fetchData}
                  selectedEmployee={selectedEmployee}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Employees;
