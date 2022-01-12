import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

interface IRequestFunction {
  <T = never>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

interface IPayloadRequestFunction {
  <T = never>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T>;
}

class Request {
  instance: AxiosInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor() {
    this.instance.interceptors.response.use(({ data }) => {
      return { message: data.debugMessage, ...data };
    });
  }

  // Axios Methods
  get: IRequestFunction = (...args) => this.instance.get(...args);
  delete: IRequestFunction = (...args) => this.instance.delete(...args);
  head: IRequestFunction = (...args) => this.instance.head(...args);
  post: IPayloadRequestFunction = (...args) => this.instance.post(...args);
  put: IPayloadRequestFunction = (...args) => this.instance.put(...args);
  patch: IPayloadRequestFunction = (...args) => this.instance.patch(...args);
}

const request = new Request();

export default request;
