import React from 'react';
import { Thing, ThingProps } from './Thing';

type ThingsListProps = {
    things: ThingProps[];
}

export class ThingsList extends React.Component<ThingsListProps> {
    constructor(props: ThingsListProps) {
        super(props);
    }

    render() {
        const { things } = this.props;
        return (
            <div className="ThingsList">
                {things.map((thing: ThingProps) => {
                    return (
                        <div key={thing.id} className="ThingList-item">
                            <Thing id={thing.id} name={thing.name} like_count={thing.like_count} thumbnail={thing.thumbnail} creator={thing.creator} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
