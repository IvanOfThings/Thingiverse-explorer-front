export interface Image {
    id: number,
    url: string,
    name: string,
    sizes: ImageSized[]
}

export interface ImageSized {
    type: ImageType,
    size: ImageSize,
    url: string
}

export enum ImageSize {
    large = 1,
    small,
    medium,
    tiny,
    featured,
    card,
    birdwing,
    tinycard
}


export enum ImageType {
    preview = 1,
    thumb,
    display
}