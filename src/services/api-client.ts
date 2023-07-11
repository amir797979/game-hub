import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "44726477753a46e9a2fbe5e20f68ddbe",
  },
});

export { CanceledError };
