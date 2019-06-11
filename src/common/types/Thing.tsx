import { Creator } from './Creator';
import { Image } from './Image';

export type Thing = {
    creator: Creator,
    default_image: Image,
    id: number,
    name: string,
    thumbnail: string;
    // collect_count: number;
    like_count: number;
}