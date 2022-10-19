import { toast } from "react-toastify";
import http from "../service";

class DataService {
  get(url) {
    return http.get(url).catch((error) => toast.error(error));
  }
  post(url, params) {
    return http.post(url).catch((error) => {
      console.log(error);
      toast.error(error);
    });
  }
}

export default new DataService();
