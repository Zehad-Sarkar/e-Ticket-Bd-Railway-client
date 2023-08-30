import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../SharedPages/Navbar/Navbar";
import Footer from "../../SharedPages/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
