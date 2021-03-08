import { Worlds, WorldsResponse, World } from './../interfaces/world';
import http, { Microservice } from './appHttp';
class WorldsService {
    private microservice: Microservice = 'world';

    public async getWorlds(): Promise<WorldsResponse> {
        return await http.get('', 'worlds.json').then((response) => response.data);
    }

    public async getWorld(world: string): Promise<any> {
        return await http.get(this.microservice, `${world}.json`).then((response) => response.data);
    }
}

const worldsService = new WorldsService();
export default worldsService;