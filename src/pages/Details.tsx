
import React, { useState, useEffect } from 'react';
import { ThingsData } from '../common/types/Thing'
import { Button } from '../components/Button'
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";


interface dataType {
    thing: ThingsData
}

type ThingsListVariables = {
    id: number
};

interface DetailsProps {
    match: {
        params: {
            id: number
        }
    }
}


export const Details: React.FC<DetailsProps> = (props) => {
    const { match: { params } } = props;


    const PRODUCTS_QUERY = gql`{
        thing(id: ${params.id}) {
            id
            name
            thumbnail
            default_image{
                url
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
            variables: { id: params.id }
        }
    );

    let loadingView = <span>Loading...</span>;
    let loadedView = <span>Resource not found</span>;

    if (data && data.thing) {
        const { id, name, default_image, } = data.thing;
        let image = default_image.sizes.find(function (element) {
            return element.type === "preview";
        })
        let imageUrl: string = image ? image.url : default_image.url;
        loadedView = (
            <div className="center_content top_content bottom_content explore">
                <h1>{name}</h1>
                <img src={imageUrl} alt={name} />
            </div>
        );
    }
    return (
        <div>
            <div className="center_content top_content justify">
                <Button to="/">Go back to Home page</Button>
            </div>
            {loading ? loadingView : loadedView}
        </div>
    );

}

