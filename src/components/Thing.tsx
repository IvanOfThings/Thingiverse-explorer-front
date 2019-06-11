import React from 'react';
import { Link } from 'react-router-dom';


import { Creator } from '../common/types/Creator';

export type ThingProps = {
    creator: Creator,
    id: number,
    name: string,
    thumbnail: string;
    // collect_count: number;
    like_count: number;
}


export class Thing extends React.Component<ThingProps> {
    constructor(props: ThingProps) {
        super(props);
    }

    render() {
        const { id, name, thumbnail, like_count } = this.props;
        return (
            <Link to={`/detail/${id}`} className="card">
                <div className="card">
                    <div className="card-image">
                        <figure className="image">
                            <img src={thumbnail} alt={name} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{name}</p>
                                <p className="subtitle is-6">{like_count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}
