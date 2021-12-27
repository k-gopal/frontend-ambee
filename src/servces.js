import axios from "axios";
let baseUrl = "http://localhost:8000";
let headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

const getRequest = async (route) => {
  try {
    let result = await axios.get(`${baseUrl}${route}`, headers);
    if (result) return result;
    return false;
  } catch (error) {
    return error;
  }
};

const postRequest = async (route, data) => {
  try {
    let result = await axios.post(`${baseUrl}${route}`, data, headers);
    if (result) return result;
    return false;
  } catch (error) {
    return error;
  }
};

export { getRequest, postRequest };
