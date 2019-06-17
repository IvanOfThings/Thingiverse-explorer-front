import { Creator } from './Creator';
import { Image } from './Image';
/*
export interface Thing {
    creator: Creator,
    default_image: Image,
    id: number,
    name: string,
    thumbnail: string;
    // collect_count: number;
    like_count: number;
}

*/


export interface ThingsData {
    id: number,
    name: string,
    thumbnail: string
    default_image: Image
    collect_count: number,
    like_count: number
    creator: Creator
};