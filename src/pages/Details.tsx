
import React from 'react';
import { ThingsData } from '../common/types/Thing'
import { Button } from '../components/Button'
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

import { ImageSize } from '../common/types/Image';

import { DetailsHeader } from '../components/Details/DetailsHeader';
import { DetailsContent } from '../components/Details/DetailsContent';

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
                sizes{
                    url
                    imageSize
                    type 
                }
            }
            collect_count
            like_count
            creator{
                id
                name
                first_name
                last_name
                url
                thumbnail                
            }
            added
            is_featured
            description
            instructions
            details
        }
    }`;


    const { data, loading } = useQuery<dataType, ThingsListVariables>(
        PRODUCTS_QUERY,
        {
            variables: { id: params.id }
        }
    );

    let loadedView = <span>Resource not found</span>;

    if (data && data.thing) {
        const { name, default_image, thumbnail, creator, added, id, description } = data.thing;

        let imageSizeValue: ImageSize | undefined = undefined;
        if (default_image && default_image.sizes) {
            imageSizeValue = default_image.sizes.find(function (element) {
                return element.type === "preview";
            })
        }

        //Obteniendo la fecha
        const dateTimeSplitted = new Date(added).toString().split(" ");
        const dateTime = `${dateTimeSplitted[1]} ${dateTimeSplitted[2]}, ${dateTimeSplitted[3]}`;

        let imageUrl: string = imageSizeValue ? imageSizeValue.url : default_image ? default_image.url : thumbnail;
        loadedView = (
            <div className="center_content top_content bottom_content">
                <DetailsHeader id={id} dateTime={dateTime} creator={creator} productName={name} />
                <DetailsContent productName={name} imageUrl={imageUrl} >{description}</DetailsContent> />
            </div>
        );
    }
    return (
        <div>
            <div className="center_content top_content justify">
                <Button to="/">Go back to Home page</Button>
            </div>
            {
                loading ?
                    (
                        <div className="center_content top_content bottom_content explore">
                            <span className="content-center message"><h1>Loading...</h1></span>
                        </div>
                    ) : loadedView}
        </div>
    );

}

