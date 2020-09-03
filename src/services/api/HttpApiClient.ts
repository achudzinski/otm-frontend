
export class HttpApiClient {
    private apiUrl: string;

    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }

    private _sendRequest(path: string, query:any = {}, options = {}) {
        query = query || {};
        options = options || {};

        const queryString = Object.keys(query).map(key => key + '=' + encodeURI(query[key] )).join('&');

        return fetch(this.apiUrl + path + (queryString ? '?' + queryString : ''), options);
    }

    sendGet(path: string, query = {}, options = {}) {
        return this._sendRequest(path, query, options);
    }

    sendPost(path: string, query = {}, body: any, options = {}) {
        const postOptions = Object.assign(options, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return this._sendRequest(path, query, postOptions);
    }
}
