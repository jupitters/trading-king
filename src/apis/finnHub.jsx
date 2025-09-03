import axios from "axios";

const finnHub = axios.create({
    baseURL: "https://finnhub.io/api/v1/"
  })

export default finnHub