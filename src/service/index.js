import axios from "axios";

export default axios.create({
  baseURL: `${process.env.REACT_APP_LOCAL_HOST_URL}`,
  headers: {
    "Content-type": "application/json",
    // Authorization: `Bearer ${
    //   AuthService ? AuthService.getLoggedInUser().access_token : ""
    // }`,
  },
});
