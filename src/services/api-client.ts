import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "573f208686b14517a18a44283d381c80",
  },
});
