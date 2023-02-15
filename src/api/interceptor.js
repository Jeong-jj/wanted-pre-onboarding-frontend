import { authToken } from "utils/authtoken";

export const interceptors = (requestHTTP) => {
  requestHTTP.interceptors.request.use(
    function (config) {
      config.headers.Authorization = `Bearer ${authToken.getToken()}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return requestHTTP;
};
