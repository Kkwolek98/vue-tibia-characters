import { ApiInformation } from './general';
export interface WorldsResponse {
    worlds: Worlds,
    online: number
}

export interface Worlds {
    online: number,
    allworlds: World[],
    information: ApiInformation
}

export interface World {
    name: string,
    online: number,
    location: WorldLocation,
    worldtype: WorldPvpType,
    additional: string
}


export type WorldLocation = 'Europe' | 'South America' | 'North America';
export type WorldPvpType = 'Open PvP' | 'Retro Hardcore PvP' | 'Optional PvP' | 'Retro Open PvP';