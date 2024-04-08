import React from "react";
import Icon from '@mdi/react';
import { mdiCalendarRange } from '@mdi/js';

const Button = function(){
  return (
    <div>
      <button
        type="button"
        className="flex rounded-lg text-[1rem] bg-neutral-100 px-6 py-4 font-medium text-neutral-600 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none">
        <Icon path={mdiCalendarRange} size={1} className="mr-2"/>
        Today
      </button>
    </div>
  )
}

export default Button;