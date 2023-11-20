import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
class REQUEST {
  instance: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config);
  }
  get(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "get" });
  }
  post(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "post" });
  }
  delete(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "DELETE" });
  }
  patch(config: AxiosRequestConfig) {
    return this.request({ ...config, method: "patch" });
  }
}

export default REQUEST;
