import React from 'react';
import { Link } from 'react-router-dom';


import { ThingsData, ImageSize } from '../common/types/Thing';

interface ThingProp {
    thing: ThingsData
}

export class Thing extends React.Component<ThingProp> {
    render() {
        const { id, name, default_image, thumbnail } = this.props.thing;
        let image: undefined | ImageSize = undefined;
        if (default_image && default_image.sizes) {
            image = default_image.sizes.find(function (element) {
                return element.type === "preview";
            })
        }
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
