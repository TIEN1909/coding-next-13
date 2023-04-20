import React from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
const Buton = () => {
  return (
    <>
      <div className="flex justify-between items-center ml-[29px] ">
        <div className="px-[8px] text-[16px] leading-[19.6px] cursor-pointer">
          <FaUserAlt />
        </div>
        <div className="px-[8px] text-[18px] leading-[19.6px] cursor-pointer">
          <MdFavorite />
        </div>
        <div className="px-[8px] text-[18px] leading-[19.6px] cursor-pointer">
          <FaShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Buton;
