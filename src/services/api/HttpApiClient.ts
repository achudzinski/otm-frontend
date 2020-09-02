
export class HttpApiClient {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    sendGet(path: string, query:any = {}, options:any = {}) {
        const queryString = Object.keys(query).map(key => key + '=' + encodeURI(query[key] )).join('&');
        return fetch(this.apiUrl + path + (queryString ? '?' + queryString : ''), options);
    }
}
