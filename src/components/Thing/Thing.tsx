import React from 'react';
import { Link } from 'react-router-dom';


import { ThingsData } from '../../common/types/Thing';
import { ImageSize } from '../../common/types/Image';
import './Thing.css';


interface ThingProp {
    thing: ThingsData
}


export const Thing: React.FC<ThingProp> = (props) => {
    const { id, name, default_image, thumbnail, creator, collect_count, like_count, added } = props.thing;
    let image: undefined | ImageSize = undefined;
    if (default_image && default_image.sizes) {
        image = default_image.sizes.find(function (element) {
            return element.type === "preview";
        })
    }

    const dateTimeSplitted = new Date(added).toString().split(" ");
    const dateTime = `${dateTimeSplitted[1]} ${dateTimeSplitted[2]}, ${dateTimeSplitted[3]}`;
    let imageUrl: string = image ? image.url : thumbnail;
    return (
        <div className="card item thing-cad">
            <div className="item-header">
                <a className="avatar-link" href={creator.thumbnail} >
                    <div className="avatar-wrapper">
                        <img className="avatar" data-src={creator.thumbnail} alt={creator.name} src={creator.thumbnail} /></div>
                </a>
                <div className="item-info center">
                    <a href="/"><span className="ellipsis">{name}</span></a>
                    <div className="justify">
                        <span className="item-creator ellipsis">by
                        <Link to={`/detail/${id}`}>{creator.name}</Link></span>
                        <span className="item-date">{dateTime}</span>
                    </div>
                </div>
            </div>
            <Link to={`/detail/${id}`} className="card-image-holder">
                <img className="card-img" src={imageUrl} alt={name} />
            </Link>
            <span className="item-badge featured-badge" title="Featured Thing:"></span>
            <div className="item-interactions justify">
                <span className="interaction">
                    <span className="center">
                        <Link to={`/detail/${id}`} className="icon icon-like center " title="Like">
                            <span className="interaction-count">{like_count}</span>
                        </Link>
                    </span>
                </span>
                <span className="interaction">
                    <span className="center">
                        <Link to={`/detail/${id}`} data-type="things" className="icon icon-collect center " title="Collection">
                            <span className="interaction-count">{collect_count}</span>
                        </Link>
                    </span>
                </span>
                <span className="interaction">
                    <span className="center">
                        <Link to={`/detail/${id}`} data-type="things" className="icon icon-comment center " title="Comment">
                            <span className="interaction-count">{}</span>
                        </Link>
                    </span>
                </span>
            </div>
        </div >
    );
}
