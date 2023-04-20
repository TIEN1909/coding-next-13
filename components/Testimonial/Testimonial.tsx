import React from "react";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <section className="bg-[url('https://fastcoding.jp/sample/html002/img/common/bg_testimonial.jpg')] w-full   bg-center bg-cover bg-no-repeat pt-[75px] pb-[30px]">
      <span className="block text-center text-[#c5c5c5] text-[14px] font-medium tracking-[0.35px] leading-[19.6px]">
        スタッフおすすめの商品
      </span>
      <h2 className="text-center text-[27px] leading-[37.8px] mt-[6px] font-semibold">
        OUR TESTIMONIAL
      </h2>
      <span className="block mt-[24px] text-center ">---------</span>
      <div className="w-full flex justify-center mt-[45px]">
        <p className="block text-center w-[750px]">
          サンプルテキストサンプルテキストサンプルテキストサンプルテ
          キストサンプルテキストサンプルテキストサンプルテキストサン
          プルテキストサンプルテキストサンプルテキストサンプルテキス
          トサンプルテキストサンプルテキストサンプルテキスト
        </p>
      </div>
      <div className="w-full flex justify-center mt-[35px]">
        <Slider />
      </div>
    </section>
  );
};

export default Testimonial;
