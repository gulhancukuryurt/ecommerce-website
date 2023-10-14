import React from "react";
import Image from "next/image";
import headerimg from "../img/header.webp";

function Header() {
  return (
    <div className="flex flex-row bg-slate-200 ">
      <div className="flex items-center mt-6">
        <Image src={headerimg} alt="header" width={500} height={150} />
      </div>
      <div className="flex flex-col bg-slate-200 justify-center items-center whitespace-pre-line">
        <p className="text-5xl mb-4 m-5 max-md:text-xl text-center whitespace-pre-line tracking-widest">
          Get up to 30% Off <br />
          New Arrivals
        </p>
        <button className="w-48 h-10  bg-violet-500 tracking-wider">Shop Now</button>
      </div>
    </div>
  );
}

export default Header;
