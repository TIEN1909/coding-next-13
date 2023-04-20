import Image from "next/image";
import { Inter } from "next/font/google";
import Top from "./top/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Top />
    </>
  );
}
