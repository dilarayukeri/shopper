export default class {
    response = {
        isSuccessful: false,
        data: {},
        error: {},
    };

    setResponseData = (data: object) => {
        this.response.data = data;
        this.response.isSuccessful = true;
    };

    setError = (errorModel: object) => {
        this.response.error = errorModel;
        this.response.isSuccessful = false;
    };

    setSuccessful = (isSuccessful: boolean) => {
        this.response.isSuccessful = isSuccessful;
    };
}
