import React, { useState } from 'react';
import { ThingsList } from '../components/ThingsList';
import { DropDown } from '../components/DropDown';
import { ThingsData } from '../common/types/Thing'
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";


interface HomeProps {
    things: ThingsData[]
};

interface dataType {
    things: ThingsData[]
}

type ThingsListVariables = {
    kind: string
};


export const Home: React.FC<HomeProps> = (props) => {
    const [kind, setKind] = useState<string>("newest");


    const PRODUCTS_QUERY = gql`{
        things(kind: "${kind}") {
            id
            name
            thumbnail
            default_image{
                sizes{
                    url
                    imageSize
                    type 
                }
            }
            collect_count
            like_count
        }
    }`;

    const { data, loading } = useQuery<dataType, ThingsListVariables>(
        PRODUCTS_QUERY,
        {
            variables: { kind: kind }
        }
    );

    let loadingView = <span>Loading...</span>;
    let loadedView = <span>Please choose an option from drop down button.</span>;
    if (data && data.things && data.things.length > 0) {
        return (
            <div >
                <div className="center_content top_content justify">
                    <DropDown onClick={setKind} />
                </div>
                <div className="center_content top_content bottom_content explore"><ThingsList things={data.things} /></div>
            </div>
        );

    } else {
        return (
            <div >
                <div className="center_content top_content justify">
                    <DropDown onClick={setKind} />
                </div>
                <div className="center_content top_content bottom_content explore">
                    {
                        loading ? loadingView : loadedView
                    }
                </div>
            </div>

        );

    }
};


