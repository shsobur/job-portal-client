import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const FindJobsLayout = () => {
  const axiosSecure = useAxiosSecure();
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axiosSecure.get("/get-all-jobs").then((res) => {
      setAllJobs(res.data);
    });
  }, [axiosSecure]);

  return (
    <>
      <section className="max-w-[1536px] m-auto p-5">
        <h1 className="text-5xl font-semibold pb-5">Jobs__</h1>

        <ul className="text-2xl">
          {allJobs.map((job, index) => (
            <li key={job._id}>
              {index + 1}. {job.title}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default FindJobsLayout;
