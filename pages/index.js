import { Inter } from "@next/font/google";
import SimpleCard from "@/components/SimpleCard";
import VerticalBar from "@/components/VerticalBar";
import LineChart from "@/components/LineChart";
import RecentOrders from "@/components/RecentOrders";
import Icon from "@mdi/react";
import { mdiAccountClock } from "@mdi/js";
import { mdiCalendarRange } from "@mdi/js";
import { mdiInboxOutline } from "@mdi/js";
import { mdiCashMultiple } from "@mdi/js";
import { mdiPencilOutline } from '@mdi/js';

import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="p-2">
        <main className=" w-3/6 md:col-span-2 relative mx-auto ">
          <button className="btn btn-gray p-2  border rounded-lg bg-white inline-flex">
            {" "}
            <Icon path={mdiCalendarRange} size={1} className="pr-1" />
            Last 30 days
          </button>
        </main>
      </div>
      <SimpleCard>
        <div className="text-gray-800 px-1 py-1 w-full grid grid-cols-4 gap-1 content-between">
          <div className=" border rounded-lg bg-slate-200	 ">
            <p className="text-gray-800 inline-flex space-between underline decoration-dotted decoration-black">Online store sessions <Icon path={mdiPencilOutline} size={1} className="p-1 ml-3" /></p>
            <p className="text-gray-800 block">730 <span className="text-green-800 font-bold"> ➘23%</span></p>
          </div>
          <div className=" border rounded-lg ">
            <p className="text-gray-800 inline-flex space-between underline decoration-dotted decoration-black">Total sales</p>
            <p className="text-gray-800 block">$0.00 <span className="text-red-800 font-bold"> ➚100%</span></p>
          </div>
          <div className=" border rounded-lg ">
            <p className="text-gray-800 inline-flex space-between underline decoration-dotted decoration-black">Total orders</p>
            <p className="text-gray-800 block">0 <span className="text-green-800 font-bold"> -</span></p>
          </div>
          <div className=" border rounded-lg ">
            <p className="text-gray-800 inline-flex space-between underline decoration-dotted decoration-black">Convertion rate</p>
            <p className="text-gray-800 block">0 <span className="text-green-800 font-bold"> -</span></p>
          </div>
        </div>
        <LineChart />
      </SimpleCard>
      <div className="p-2">
        <main className=" w-3/6 md:col-span-2 relative mx-auto">
          <p className="text-gray-800  inline-flex">Things to do neat</p>
        </main>
      </div>
      <div className="p-2">
        <main className=" w-3/6 md:col-span-2 relative mx-auto">
          <button className="btn btn-gray p-2 m-2 border rounded-lg bg-white inline-flex">
            {" "}
            <Icon path={mdiInboxOutline} size={1} className="pr-1" />
            50+ orders to fullfil
          </button>
          <button className="btn btn-gray p-2 m-2 border rounded-lg bg-white inline-flex">
            {" "}
            <Icon path={mdiCashMultiple} size={1} className="pr-1" />3 payments
            to capture
          </button>
        </main>
      </div>
      <div className="p-2">
        <main className=" w-3/6 md:col-span-2 relative mx-auto">
          <button className="btn btn-gray p-2  border rounded-lg bg-white inline-flex">
            {" "}
            <Icon path={mdiCalendarRange} size={1} className="pr-1" />
            Last 30 days
          </button>
        </main>
      </div>
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
      <div className="p-2">
        <main className=" w-3/6 md:col-span-2 relative mx-auto">
          <button className="btn btn-gray p-2  border rounded-lg bg-white inline-flex">
            {" "}
            <Icon path={mdiCalendarRange} size={1} className="pr-1" />
            Last 30 days
          </button>
        </main>
      </div>
      <SimpleCard>
        <p className="text-gray-800 font-bold">Most SoldItems</p>
        <div className="">
          <div className="text-gray-800 px-3 py-2 w-full grid grid-cols-5 gap-4 content-between">
            <div className="">
              <div className="w-full flex justify-center">
                <Image
                  src="/item.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800 ">most sold items</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <VerticalBar now={45} last={21} />
            </div>
            <div className="">
              <div className="w-full flex justify-center">
                <Image
                  src="/item.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800 ">most sold items</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <VerticalBar now={45} last={21} />
            </div>
            <div className="">
              <div className="w-full flex justify-center">
                <Image
                  src="/item.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800 ">most sold items</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <VerticalBar now={45} last={21} />
            </div>
            <div className="">
              <div className="w-full flex justify-center">
                <Image
                  src="/item.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800 ">most sold items</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <VerticalBar now={45} last={21} />
            </div>
            <div className="">
              <div className="w-full flex justify-center">
                <Image
                  src="/item.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800 ">most sold items</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="w-full flex justify-start">
                  <p className="text-gray-800  inline-flex">item1</p>
                </div>
              </div>
              <VerticalBar now={45} last={21} />
            </div>
          </div>
        </div>
      </SimpleCard>
      {/* <SimpleCard>
        <BarChart />
      </SimpleCard>
      <SimpleCard>
        <RecentOrders />
      </SimpleCard> */}
    </main>
  );
}
