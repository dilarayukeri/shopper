export default class BaseApi {
    httpService;

    setHttpService = httpService => {
        this.httpService = httpService;
    };

    // GET request
    _doGet = (endpoint: string, headers = {}) => {
        return this.httpService.fetch({
            pureHttpMode: true,
            method: "get",
            endpoint,
            headers,
        });
    };
}
