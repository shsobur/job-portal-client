// File path__
import Banner from "../Banner/Banner";
import useAxiosPublic from "../../../../../Hooks/useAxiosPublic";
import { AuthContext } from "../../../../../Provider/AuthProvider";
import UserDataLoading from "../../../../Components/UserDataLoading/UserDataLoading";

// From react__
import { use, useEffect, useState } from "react";

const HomePageLayout = () => {
  const { user } = use(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [userDataLoading, setUserDataLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const userRoleData = {
        name: user.displayName,
        userEmail: user.email,
        isVerify: user.emailVerified,
        userPhoto: user.photoURL,
        userRole: "applicant",
      };

      // Stor user data on DB__
      const handleUserData = async () => {
        try {
          setUserDataLoading(true);
          const res = await axiosPublic.post("/user-role-data", userRoleData);
          console.log(res.data);
        } catch (error) {
          console.error("Error saving user data:", error);
        } finally {
          setUserDataLoading(false);
        }
      };

      handleUserData();
    }
  }, [user, axiosPublic]);

  return (
    <>
      {userDataLoading ? (
        <section>
          <UserDataLoading></UserDataLoading>
        </section>
      ) : (
        <section>
          <Banner></Banner>
        </section>
      )}
    </>
  );
};

export default HomePageLayout;
