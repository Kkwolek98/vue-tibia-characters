import axios, { AxiosInstance } from 'axios';

export type Microservice = 'characters' | 'world' | 'guilds' | 'highscore' | 'houses' | 'news' | '';

class HttpApiClient {
    private _http: AxiosInstance;

    constructor() {
        this._http = axios.create({
            httpsAgent: {
                rejectUnauthorized: false,
            },
            baseURL: 'https://api.tibiadata.com/v2/',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    public get(microservice: Microservice, route: string, params?: any): Promise<any> {
        return this._http.get(this.assembleRoute(microservice, route));
    }

    private assembleRoute(microservice: Microservice, route: string) {
        return microservice ? `${microservice}/${route}` : route;
    }

}

const http = new HttpApiClient();

export default http;