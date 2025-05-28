// File path__
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";

// Imported package__
import { Outlet } from "react-router";

const Main = () => {
  return (
    <>
      <section>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </section>
    </>
  );
};

export default Main;