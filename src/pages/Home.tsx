import React, { useState, useEffect } from 'react';
import { ThingsList } from '../components/ThingsList';
import { DropDown } from '../components/DropDown';
import axios from 'axios';
import { ThingsData } from '../common/types/Thing'
import Cookies from 'universal-cookie';
import gql from "graphql-tag";
import { graphql, ChildDataProps } from "react-apollo";
import { useQuery } from "react-apollo-hooks";
import { number, any } from 'prop-types';


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
    /*
        useEffect(() => {
            const { data, loading } = useQuery<dataType, ThingsListVariables>(
                PRODUCTS_QUERY,
                {
                    variables: { kind: kind }
                }
            );
        }, [kind])*/

    let loadingView = <span>Loading...</span>;
    let loadedView = <span>Something went wrong</span>;
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


