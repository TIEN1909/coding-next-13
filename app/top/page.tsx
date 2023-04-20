import React from "react";
import Advantages from "@/components/Advantages/Advantages";
import Blog from "@/components/Blog/Blog";
import Brand from "@/components/Brand/Brand";
import Collection from "@/components/Collection/Collection";
import Community from "@/components/Community/Community";
import Guide from "@/components/Guide/Guide";
import Seller from "@/components/Seller/Seller";
import Testimonial from "@/components/Testimonial/Testimonial";
import Slider from "@/components/Slider/Slider";

const Top = () => {
  return (
    <>
      <Slider />
      <Brand />
      <Seller />
      <Guide />
      <Advantages img="image" ingredient="Some ingredient" desc="Description" />
      <Collection image="image" face="face" name="name" price="price" />
      <Testimonial />
      <Blog />
      <Community />
    </>
  );
};

export default Top;
