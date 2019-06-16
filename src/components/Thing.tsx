import React from 'react';
import { Link } from 'react-router-dom';


import { ThingsData } from '../common/types/Thing';

/*
export interface ThingProps {
    creator: Creator,
    id: number,
    name: string,
    thumbnail: string;
    // collect_count: number;
    like_count: number;
}


type Image = {
    url: string
}

export interface ThingsData {
    id: string,
    name: string,
    thumbnail: string
    default_image: Image
    collect_count: number,
    like_count: number
};*/

interface ThingProp {
    thing: ThingsData
}


export class Thing extends React.Component<ThingProp> {
    render() {
        const { id, name, default_image, thumbnail } = this.props.thing;
        let image = default_image.sizes.find(function (element) {
            return element.type === "preview";
        })
        let imageUrl: string = image ? image.url : thumbnail;
        return (
            <Link to={`/detail/${id}`} className="card">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={imageUrl} alt={name} />
                        </figure>
                    </div>
                </div>
            </Link>
        );
    }
}
