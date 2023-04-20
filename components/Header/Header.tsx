import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import Button from "../Button/Button";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-[206px] py-[10px] bg-[url('https://fastcoding.jp/sample/html002/img/top/bg_keyvisual.jpg')] w-full bg-top  bg-cover bg-no-repeat">
      <Link href="/">
        <Image src={logo} alt="logo" width={115} height={61} />
      </Link>
      <div className="flex justify-between items-center text-[#707070] text-[14px]">
        <div className=" flex ">
          <Link className=" px-[25px]" href="/">
            TOP
          </Link>
          <Link className=" px-[25px]" href="/product">
            PRODUCTS
          </Link>
          <Link className=" px-[25px]" href="/blog">
            BLOG
          </Link>
          <Link className=" px-[25px]" href="/contact">
            CONTACT
          </Link>
          <Link className=" px-[25px]" href="/faq">
            FAQ
          </Link>
        </div>
        <Button />
      </div>
    </header>
  );
};

export default Header;
