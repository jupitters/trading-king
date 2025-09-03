import axios from "axios";

const TOKEN = "d2rrl39r01qv11lfupu0d2rrl39r01qv11lfupug";

const finnHub = axios.create({
    baseURL: "https://finnhub.io/api/v1/",
    params: {
        token: TOKEN
    }
  })

export default finnHub