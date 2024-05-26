import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  columns: string[];
  itemsPerPage: number;
}

const DataTable = ({ data, columns, itemsPerPage }: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * itemsPerPage;
  const indexOfFirstRow = indexOfLastRow - itemsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const changePage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="mx-auto py-4 w-full overflow-x-auto no-scrollbar">
      <div className="mt-6 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-50">
                  <tr>
                    {
                      columns && columns.length===0 && <h1>NO Data Available</h1>
                    }
                    {columns.map((column, index) => (
                      <th
                        key={index}
                        className="px-4 py-3.5 text-center text-sm font-normal text-gray-700"
                      >
                        {column}
                      </th>
                    ))}
                    <th className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentRows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {columns.length === 0 && (
                        <td
                          colSpan={columns.length}
                          className="whitespace-nowrap px-4 py-4"
                        >
                          No data available
                        </td>
                      )}
                      {columns.map((column, colIndex) => (
                        <td
                          key={colIndex}
                          className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium text-gray-900"
                        >
                          <p className="text-sm font-medium text-gray-900">
                            {row[column]}
                          </p>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-6">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mx-1 flex items-center text-sm font-semibold text-gray-900 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          <IoIosArrowBack className="mr-1" />
          <span className="hidden lg:block">Previous</span>
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => changePage(page + 1)}
            className={`mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${currentPage === page + 1 ? "bg-gray-300" : ""
              }`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`mx-1 flex items-center text-sm font-semibold text-gray-900 ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          <span className="hidden lg:block">Next</span>
          <IoIosArrowForward className="ml-1" />
        </button>
      </div>
    </section>
  );
};

export default DataTable;
