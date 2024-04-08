import React from 'react'
import SimpleCard from "@/components/SimpleCard";
import Icon from "@mdi/react";
import { mdiAccountClock } from "@mdi/js";

const order = () => {
  return (
    <main className="min-h-screen bg-gray-100">
      <SimpleCard>
        <p className="text-gray-800 font-bold">Sellers Performances</p>
        <div className="">
          <div className="text-gray-800 px-3 py-2 w-full grid grid-cols-4 gap-4 content-between">
            <div className="">
              <div className="flex justify-center">
                <Icon
                  path={mdiAccountClock}
                  size={5}
                  className="pr-1 flex justify-center"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold">Antonlne C</p>
              </div>
              <div className="flex justify-center"> 
                <p className="text-gray-800 font-bold inline-flex">
                  New Customers:{" "}
                  <span className="text-green-800 font-bold">85</span>
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-10/12 h-6 bg-gray-200 rounded-sm dark:bg-gray-700">
                  <div className="w-9/12 h-6 bg-green-700 rounded-sm dark:bg-green-600"></div>
                </div>
              </div>
              <div className="flex justify-around">
                <p className="text-gray-800 font-bold">52603$</p>
                <p className="text-gray-800 font-bold">60000$</p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center">
                <Icon
                  path={mdiAccountClock}
                  size={5}
                  className="pr-1 flex justify-center"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold">Antonlne C</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold inline-flex">
                  New Customers:{" "}
                  <span className="text-green-800 font-bold">85</span>
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-10/12 h-6 bg-gray-200 rounded-sm dark:bg-gray-700">
                  <div className="w-9/12 h-6 bg-green-700 rounded-sm dark:bg-green-600"></div>
                </div>
              </div>
              <div className="flex justify-around">
                <p className="text-gray-800 font-bold">52603$</p>
                <p className="text-gray-800 font-bold">60000$</p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center">
                <Icon
                  path={mdiAccountClock}
                  size={5}
                  className="pr-1 flex justify-center"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold">Antonlne C</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold inline-flex">
                  New Customers:{" "}
                  <span className="text-green-800 font-bold">85</span>
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-10/12 h-6 bg-gray-200 rounded-sm dark:bg-gray-700">
                  <div className="w-9/12 h-6 bg-green-700 rounded-sm dark:bg-green-600"></div>
                </div>
              </div>
              <div className="flex justify-around">
                <p className="text-gray-800 font-bold">52603$</p>
                <p className="text-gray-800 font-bold">60000$</p>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center">
                <Icon
                  path={mdiAccountClock}
                  size={5}
                  className="pr-1 flex justify-center"
                />
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold">Antonlne C</p>
              </div>
              <div className="flex justify-center">
                <p className="text-gray-800 font-bold inline-flex">
                  New Customers:{" "}
                  <span className="text-green-800 font-bold">85</span>
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-10/12 h-6 bg-gray-200 rounded-sm dark:bg-gray-700">
                  <div className="w-9/12 h-6 bg-green-700 rounded-sm dark:bg-green-600"></div>
                </div>
              </div>
              <div className="flex justify-around">
                <p className="text-gray-800 font-bold">52603$</p>
                <p className="text-gray-800 font-bold">60000$</p>
              </div>
            </div>
          </div>
        </div>
      </SimpleCard>
    </main>
  )
}

export default order