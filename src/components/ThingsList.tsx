import React from 'react';
import { Thing } from './Thing';
import { ThingsData } from '../common/types/Thing';

interface ThingsListProps {
    things: ThingsData[]
}
/*


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
};

name={thing.name} like_count={thing.like_count} default_image={thing.default_image} thumbnail={thing.thumbnail} collect_count={thing.collect_count}/>*/

export class ThingsList extends React.Component<ThingsListProps> {
    render() {
        const things = this.props.things;
        return (
            <div className="ThingsList">
                {
                    things && things.map((thing: ThingsData) => {
                        return (
                            <div key={thing.id} className="ThingList-item">
                                <Thing thing={thing} />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
