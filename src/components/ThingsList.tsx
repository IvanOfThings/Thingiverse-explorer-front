import React from 'react';
import { Thing } from './Thing/Thing';
import { ThingsData } from '../common/types/Thing';

interface ThingsListProps {
    things: ThingsData[]
}


export const ThingsList: React.FC<ThingsListProps> = (props) => {
    const things = props.things;
    return (
        <div className="ThingsList items-page justify justify-left">
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
