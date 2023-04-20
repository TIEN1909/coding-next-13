import Collection from "@/components/Collection/Collection";
import Community from "@/components/Community/Community";
import Seller from "@/components/Seller/Seller";

const Product = () => {
  return (
    <div>
      <Collection image="image" face="face" name="name" price="price" />
      <Community />
      <Seller />
    </div>
  );
};

export default Product;
