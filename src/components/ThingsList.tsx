import React from 'react';
import { Thing } from './Thing';
import { ThingsData } from '../common/types/Thing';

interface ThingsListProps {
    things: ThingsData[]
}

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
