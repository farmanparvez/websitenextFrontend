import axios from "axios";

export const request = (config) => axios.request[config].then((res) => res.data)