import BaseApi from "./BaseApi";
import HttpService from "./HttpService";

class Endpoint extends BaseApi {
    customHeader = {
        "X-MediaVersion": 1,
    };

    getProducts = (page: number) => {
        return this._doGet(`/products?page=${page}&limit=10`);
    };

    getProductByCategory = (category: string) => {
        return this._doGet(`/products?search=${category}`);
    };
}

// Creating new instances of each api and httpService
const endpoint = new Endpoint();
const customHttpService = new HttpService();

// Setting httpService for api
endpoint.setHttpService(customHttpService);

const apiClient = { ...endpoint };
export default apiClient;
