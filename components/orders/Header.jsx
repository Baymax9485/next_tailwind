import React from "react";

const Header = function(){
  return(
    <div className="flex justify-between">
      <p className="text-black text-[2rem] font-extrabold">Orders</p>
      <div className="flex space-x-5">
        <button
          type="button"
          className="inline-block rounded-lg text-[1rem] bg-neutral-100 p-3 font-medium text-neutral-600 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong">
          Export
        </button>
        <select
          className="inline-block rounded-lg text-[1rem] bg-neutral-100 p-3 font-medium text-neutral-600 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong">
          <option defaultValue="More Action">More Actions</option>
          <option value="alive">New</option>
          <option value="dead">Delete</option>
        </select>
        <button
          type="button"
          className="inline-block rounded-lg text-[1rem] bg-neutral-800 p-3 font-medium text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong">
          Create Order
        </button>
      </div>
    </div>
  )
}

export default Header