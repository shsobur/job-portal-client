import { NavLink } from "react-router";
import {
  FcHome,
  FcList,
  FcRedo,
  FcExternal,
  FcBinoculars,
  FcAddDatabase,
  FcConferenceCall,
} from "react-icons/fc";

const DashboardNavbar = () => {
  return (
    <>
      <section>
        <h2 className="text-3xl text-[#309689] font-semibold pb-5">
          Dashboard Menu
        </h2>

        <nav className="flex flex-col items-start space-y-8 text-lg">
          <NavLink
            to="/dashboard/overview"
            className={({ isActive }) =>
              isActive
                ? "w-full p-2 rounded-md bg-[#309689] text-white flex items-center gap-2"
                : "flex items-center gap-2 w-full text-black p-3 rounded-md hover:bg-[#3096881b]"
            }
          >
            <FcBinoculars size={28} /> Overview
          </NavLink>

          <NavLink
            to="/dashboard/add-job"
            className={({ isActive }) =>
              isActive
                ? "w-full p-2 rounded-md bg-[#309689] text-white flex items-center gap-2"
                : "flex items-center gap-2 w-full text-black p-2 rounded-md hover:bg-[#3096881b]"
            }
          >
            <FcAddDatabase size={30} /> Post Job
          </NavLink>

          <NavLink
            to="/dashboard/update-job"
            className={({ isActive }) =>
              isActive
                ? "w-full p-2 rounded-md bg-[#309689] text-white flex items-center gap-2"
                : "flex items-center gap-2 w-full text-black p-2 rounded-md hover:bg-[#3096881b]"
            }
          >
            <FcExternal size={30} /> Update Job
          </NavLink>

          <NavLink
            to="/dashboard/update-job"
            className={({ isActive }) =>
              isActive
                ? "w-full p-2 rounded-md bg-[#309689] text-white flex items-center gap-2"
                : "flex items-center gap-2 w-full text-black p-2 rounded-md hover:bg-[#3096881b]"
            }
          >
            <FcList size={25} /> All Job Circular
          </NavLink>

          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              isActive
                ? "w-full p-2 rounded-md bg-[#309689] text-white flex justify-start items-end gap-2"
                : "flex items-center gap-2 w-full text-black p-2 rounded-md hover:bg-[#3096881b]"
            }
          >
            <FcConferenceCall size={30} /> All users
          </NavLink>

          <p className="w-full border border-[#309689]"></p>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-[#309689] text-white flex justify-start items-end gap-2"
                : "flex items-center gap-2 w-full text-black p-2 rounded-md hover:bg-[#3096881b]"
            }
          >
            <FcHome size={28} /> Home
          </NavLink>

          <button className="flex items-center gap-2">
            <FcRedo size={25} /> Logout
          </button>
        </nav>
      </section>
    </>
  );
};

export default DashboardNavbar;