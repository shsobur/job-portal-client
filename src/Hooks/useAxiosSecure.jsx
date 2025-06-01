import axios from "axios";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API_URL,
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;