// File path__
import Banner from "../Banner/Banner";
import useUserData from "../../../../../Hooks/useUserData";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import UserDataLoading from "../../../../Components/UserDataLoading/UserDataLoading";

// From react__
import { useContext, useEffect, useState } from "react";

const HomePageLayout = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { userDataLoading } = useUserData();
  const [userDataStorLoading, setUserDataStorLoading] = useState(false);

  useEffect(() => {
    if (user) {
      const userData = {
        name: user?.displayName || "User456",
        email: user.email,
        role: "user",
        photo: "",
        phone: "",
        address: "",
        resumeLink: "",
        experience: 0,
        education: "",
        skills: {
          professionalIn: [],
          familiarWith: [],
        },
        appliedJobs: [],
        savedJobs: [],
        createdAt: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
      };

      // Stor user data on DB__
      const handleUserData = async () => {
        try {
          setUserDataStorLoading(true);
          await axiosPublic.post("/user-role-data", userData);
        } catch (error) {
          console.error("Error saving user data:", error);
        } finally {
          setUserDataStorLoading(false);
        }
      };

      handleUserData();
    }
  }, [user, axiosPublic]);

  return (
    <>
      <section>
        {userDataStorLoading || userDataLoading ? (
          <UserDataLoading />
        ) : (
          <Banner />
        )}
      </section>
    </>
  );
};

export default HomePageLayout;