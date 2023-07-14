import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import MakeItYours from "@/components/MakeItYours";
import Examples from "@/components/Examples";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Footer from "@/components/Footer";
import InternalSite from "@/components/InternalSite";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="tablet:px-[2%] px-[10%] mt-10">
        <p>
          <ArrowBackIosIcon style={{ fontSize: "10px", color: "lightblue" }} />{" "}
          <span className="text-[#2d3e46] text-xs">BACK TO TEMPLATES</span>
        </p>
        <MakeItYours />
        <div className="border border-blue-100 border-solid my-10 p-4">
          <InternalSite />
        </div>
        <Examples />
        <div className="my-44 flex justify-between">
          <p>
            <ArrowBackIosIcon
              style={{ fontSize: "10px", color: "lightblue" }}
            />{" "}
            <span className="text-[#2d3e46] text-xs">BACK TO TEMPLATES</span>
          </p>
          <p className="text-[#2d3e46] text-xs">
            BACK TO TOP{" "}
            <span>
              <ArrowUpwardIcon
                style={{ fontSize: "20px", color: "lightblue" }}
              />
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
