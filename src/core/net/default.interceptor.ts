import axios from "axios";
import { environment } from "../../environments/environment";
import { Modal } from "antd";

axios.defaults.headers["Content-Type"] = "application/json";
const instance = axios.create();

instance.interceptors.request.use(
  config => {
    // 统一加上服务端前缀
    let url = config.url || "";
    if (
      !url.startsWith("./") &&
      !url.startsWith("https://") &&
      !url.startsWith("http://")
    ) {
      url = environment.SERVER_URL + url;
    }
    /** set token
     * config.headers.Authorization = "Bearer ...";
     */
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let title = `请求错误`;
    let content = "";
    if (error.response) {
      title = `${title} ${error.response.status}`;
      content = `请求地址：${error.request.responseURL}`;
    }
    if (error.message) {
      content = `${content} 错误信息：${error.message}`;
    }
    Modal.error({ title, content });
    return Promise.reject(error);
  }
);

export { instance as axios };
