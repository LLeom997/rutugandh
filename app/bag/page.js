import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";
import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

const page = () => {
  return (
    <div className={montserrat.className}>
      <Navbar />
      <Cart />
    </div>
  );
};

export default page;
