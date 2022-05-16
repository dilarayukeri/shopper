import ResponseModel from "./ResponseModel";

export interface OptionType {
    endpoint: string;
    body: object;
    method: string;
    headers: object;
}

const API_URL = "https://627f7798b1cc1b126255ff73.mockapi.io/api/v1";

export default class CustomHttpService {
    fetch = async (options: OptionType) => {
        try {
            // REQUEST PARAMS
            const fullApiPath = API_URL + options.endpoint;
            const body = options.body || {};
            const method = options.method || "get";
            const headers = options.headers || {};

            const fetchOptions = {
                method,
                headers: {
                    ...headers,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Accept-Language": "tr",
                },
            };
            // ADD REQUEST BODY
            if (method === "post") {
                fetchOptions.body = JSON.stringify(body);
            }

            // REQUEST
            const response = await fetch(fullApiPath, fetchOptions);

            const responseJson = await response.json();

            const responseModel = new ResponseModel();

            // RESPONSE
            if (!response.ok) {
                responseModel.setSuccessful(false);
                responseModel.setError(response);
                return responseModel.response;
            }

            if (!responseJson) return response;

            responseModel.setResponseData(responseJson);
            responseModel.setSuccessful(true);

            return responseModel.response;
        } catch (error) {
            console.log("fetch error: " + error);
        }
    };
}
