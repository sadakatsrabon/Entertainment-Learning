import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";
// import banner from "../../src/assets/banner.png";
import "./Main.css";
import Slider from "../pages/Slider";
import ClassCategory from "../pages/ClassCategory";
import instructors from "../pages/instructors";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="pt-24 text-center">
          <Slider></Slider>
          <ClassCategory></ClassCategory>
          <instructors></instructors>
        </div>
        <div className="flex flex-col md:flex-row pt-24">
          
          <div className="w-full md:w-1/2 md:h-screen md:overflow-y-auto hide-scrollbar">
            <div className="h-screen md:max-h-screen">
              <div className="h-full overflow-y-auto">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
