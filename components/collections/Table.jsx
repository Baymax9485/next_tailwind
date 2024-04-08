import React from "react";
import Icon from '@mdi/react';
import { mdiCompareVertical, mdiViewColumnOutline, mdiMagnify, mdiFilterVariant } from '@mdi/js';


import { testData } from "@/data/data"

const Table = function () {

  const orderData = testData.orders.table;
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex justify-between px-2">
          <div className="flex me-2 mb-2">
            <button type="button" class="w-auto text-gray-800 hover:bg-gray-200 focus:bg-gray-200 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none">All</button>
            <button type="button" class="w-auto text-gray-800 hover:bg-gray-200 focus:bg-gray-200 font-medium rounded-lg text-md px-5 py-2.5 focus:outline-none">+</button>
          </div>
          <div className="flex space-x-2 me-2 mb-2">
            <button type="button" class="flex space-x-1 w-auto hover:bg-gray-200 focus:bg-gray-200 rounded-lg px-2.5 py-2.5 focus:outline-none">
              <Icon path={mdiMagnify} size={1} />
              <Icon path={mdiFilterVariant} size={1} />
            </button>
            <button type="button" class="w-auto hover:bg-gray-200 focus:bg-gray-200 rounded-lg px-2.5 py-2.5 focus:outline-none">
              <Icon path={mdiViewColumnOutline} size={1} />
            </button>
            <button type="button" class="w-auto hover:bg-gray-200 focus:bg-gray-200 rounded-lg px-2.5 py-2.5 focus:outline-none">
              <Icon path={mdiCompareVertical} size={1} />
            </button>
          </div>
        </div>
        <table className="w-full table-auto text-sm text-left rtl:text-right text-black dark:text-gray-800">
          <thead className="text-xs text-black bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Products
              </th>
              <th scope="col" className="px-6 py-3">
                Product conditions
              </th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((data) => (
              <tr key={data.order} className="bg-white border-b dark:bg-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-400">
                <td className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-300 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-3">{data.title}</td>
                <td className="px-6 py-3">{data.products}</td>
                <td className="px-6 py-3"></td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
