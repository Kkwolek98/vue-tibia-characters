import http, { Microservice } from './appHttp';

class CharactersService {
    private microservice: Microservice = 'characters';

    public getCharacter(characterName: string) {
        return http.get(this.microservice, `${characterName}.json`);
    }
}

const charactersService = new CharactersService();

export default charactersService;