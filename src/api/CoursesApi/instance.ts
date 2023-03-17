import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_HOST

export const client = axios.create({ baseURL });