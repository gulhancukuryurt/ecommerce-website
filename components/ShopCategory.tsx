import React from "react";
import items1 from "../img/items1.jpg.webp";
import items2 from "../img/items2.jpg.webp";
import items3 from "../img/items3.jpg.webp";
import Image from "next/image";

function ShopCategory() {
  return (
    <div className="flex justify-center align-top">
      <div className="flex absolute flex-row gap-8 mt-4 max-md:flex-col max-md:gap-0.5">
        <div>
          <div className="group">
            <Image src={items1} alt="item1" width={300} height={200}></Image>
            <div className="flex flex-col relative -top-12 bg-gray-400 p-2 ">
            <span className="text-center font-bold text-white p-2 text-lg tracking-widest group-hover:-translate-y-2">Men Fashion</span>
            <button className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in group-hover:-translate-y-4 hover:text-red-200 hover:tracking-widest">Shop Now</button>
          </div>
          </div>
        </div>
        <div className="group">
          <Image src={items2} alt="item1" width={300} height={200}></Image>
          <div className="flex flex-col relative -top-12 bg-gray-400 p-2 ">
            <span className="text-center font-bold text-white p-2 text-lg tracking-widest group-hover:-translate-y-2">Accessories</span>
            <button className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in group-hover:-translate-y-4 hover:text-red-200 hover:tracking-widest">Shop Now</button>
          </div>
        </div>
        <div className="group">
          <Image src={items3} alt="item1" width={300} height={200}></Image>
          <div className="flex flex-col relative -top-12 bg-gray-400 p-2 ">
            <span className="text-center font-bold text-white p-2 text-lg tracking-widest group-hover:-translate-y-2">Women Fashion</span>
            <button className="text-white opacity-0 group-hover:opacity-100 transition duration-300 ease-in group-hover:-translate-y-4 hover:text-red-200 hover:tracking-widest">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCategory;
