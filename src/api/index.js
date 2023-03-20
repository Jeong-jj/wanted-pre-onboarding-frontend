import axios from "axios";
import { interceptors } from "./interceptor";

const BASE_URL = "https://pre-onboarding-selection-task.shop/";
const HEADERS = { "Content-Type": "application/json" };

export const api = axios.create({ baseURL: BASE_URL, headers: HEADERS });

export const apiWithToken = interceptors(api);
