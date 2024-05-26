import { useState } from "react";
import { API_URL } from "../../api/api";

type AddEmployeeProps = {
  closeModal: () => void;
  fetchData: () => void;
};

const AddEmployee = ({ closeModal, fetchData }: AddEmployeeProps) => {
  const [error, setError] = useState('');
  const [inputData, setInputData] = useState({
    employeeName: "",
    department: "",
    position: "",
    salary: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputData.employeeName === '') {
      setError('Employee Name is required');
      return;
    }
    if (inputData.department === '') {
      setError('Department is required');
      return;
    }
    if (inputData.position === '') {
      setError('Position is required');
      return;
    }
    if (inputData.salary === '') {
      setError('Salary is required');
      return;
    }
    if (inputData.address === '') {
      setError('Address is required');
      return;
    }
    try {
      const response = fetch(`${API_URL}/employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      if (!(await response).ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await (await response).json();
      console.log(resData);
      fetchData();

      closeModal();
    } catch (error) {
      console.log(error);
      alert(error.message || "Something went wrong!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-xl font-semibold mt-5 text-gray-800 text-start pl-8">
        Add Employee
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-4 sm:gap-10 p-8">

        <div>
          <label
            htmlFor="employeeName"
            className="block text-sm font-semibold mb-3 text-gray-700"
          >
            Employee Name*
          </label>
          <input
            type="text"
            name="employeeName"
            placeholder="Enter name"
            id="employeeName"
            className="mt-1 block w-full h-[48px] border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none pl-3"
            onChange={handleChange}
            value={inputData.employeeName}
            required
          />
        </div>
        <div
        >
          <label
            htmlFor="department"
            className="block text-sm font-semibold mb-3 text-gray-700"
          >
            Department*
          </label>
          <select
            name="department"
            id="department"
            className="mt-1 block w-full h-[48px] border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none pl-3"
            onChange={handleChange}
            value={inputData.department}
            required
          >
            <option
              className="text-gray-400"
              value="">Select Department</option>
            <option
              className="text-gray-400"
              value="Developer">Developer</option>
            <option
              className="text-gray-400"
              value="Teacher">Teacher</option>
            <option
              className="text-gray-400"
              value="Human Resource">Human Resource</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-semibold mb-3 text-gray-700"
          >
            Position*
          </label>
          <input
            type="text"
            name="position"
            placeholder="Enter position"
            id="position"
            className="mt-1 block w-full h-[48px] border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none pl-3"
            onChange={handleChange}
            value={inputData.position}
            required
          />
        </div>
        <div>
          <label
            htmlFor="salary"
            className="block text-sm font-semibold mb-3 text-gray-700"
          >
            Salary*
          </label>
          <input
            type="number"
            name="salary"
            placeholder="Enter salary"
            id="salary"
            className="mt-1 block w-full h-[48px] border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none pl-3"
            onChange={handleChange}
            value={inputData.salary}
            required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-semibold mb-3 text-gray-700"
          >
            Address*
          </label>
          <textarea
            name="address"
            id="address"
            placeholder="Enter address"
            className="mt-1 block w-full h-[60px] border border-gray-300 rounded-md shadow-sm sm:text-sm outline-none pl-3"
            onChange={handleChange}
            value={inputData.address}
            required
          />
        </div>
      </div>
      <div className="flex justify-center gap-6 items-center bg-slate-100 p-5 rounded-b-lg">
        <button
          type="button"
          className="bg-white flex gap-1 items-center border-2 text-gray-800 px-5 py-4 rounded-xl text-sm font-semibold"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-700 flex gap-1 items-center text-white px-5 py-4 font-semibold rounded-md text-sm"
        >
          Create Employee
        </button>
      </div>
    </form>
  );
};

export default AddEmployee;
