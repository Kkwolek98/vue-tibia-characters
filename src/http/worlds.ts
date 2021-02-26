import { Worlds, WorldsResponse } from './../interfaces/world';
import http, { Microservice } from './appHttp';
class WorldsService {
    private microservice: Microservice = 'worlds';

    public async getWorlds(): Promise<WorldsResponse> {
        return await http.get('', 'worlds.json').then((response) => response.data);
    } 
}

const worldsService = new WorldsService();
export default worldsService;