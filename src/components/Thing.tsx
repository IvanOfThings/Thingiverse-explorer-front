import React from 'react';
import { Link } from 'react-router-dom';


import { ThingsData } from '../common/types/Thing';
import { ImageSize } from '../common/types/Image';

interface ThingProp {
    thing: ThingsData
}

export class Thing extends React.Component<ThingProp> {
    render() {
        const { id, name, default_image, thumbnail, creator } = this.props.thing;
        let image: undefined | ImageSize = undefined;
        if (default_image && default_image.sizes) {
            image = default_image.sizes.find(function (element) {
                return element.type === "preview";
            })
        }
        let imageUrl: string = image ? image.url : thumbnail;
        return (
            // <Link to={`/detail/${id}`} className="card">
            <div className="card item thing-cad">
                <div className="item-header">
                    <a className="avatar-link" href={creator.thumbnail} >
                        <div className="avatar-wrapper">
                            <img className="avatar" data-src={creator.thumbnail} alt={creator.name} src={creator.thumbnail} /></div>
                    </a>
                    <div className="item-info center">
                        <a href="/"><span className="ellipsis">{name}</span></a>
                        <div className="justify">
                            <span className="item-creator ellipsis">by</span>
                            <a href="/">{creator.name}</a>
                        </div>
                        <span className="item-date"></span>
                    </div>
                </div>
                <Link to={`/detail/${id}`} className="card-image-holder">
                    <img className="card-img" src={imageUrl} alt={name} />
                </Link>
            </div >
            //</Link>
        );
    }
}
