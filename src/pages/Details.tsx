
import React from 'react';
import { ThingsData } from '../common/types/Thing'
import { Button } from '../components/Button'
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { Link } from 'react-router-dom';

import { ImageSize } from '../common/types/Image';

import './css/Details.css';

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
            description_html
            instructions_html
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
        const { name, default_image, thumbnail, creator, added, id, description_html } = data.thing;

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
                <div className="item-page-header">
                    <span className="inline">
                        <Link to={`/detail/${id}`} className="avatar-link"  >
                            <div className="avatar-wraper" >
                                <img data-src="" src={creator.thumbnail} className="avatar" alt={creator.name} />
                            </div>
                        </Link>
                    </span>
                    <div className="item-page-info">
                        <h1>{name}</h1>
                        <span>by <Link to={`/detail/${id}`} >{creator.name}</Link></span>
                        <span>{dateTime}</span>
                    </div>
                </div>
                <div className="justify">
                    <div className="inline width-2 gallery-holder">
                        <div className="gallery page-gallery">
                            <div className="gallery-main gallery-section">
                                <img src={imageUrl} alt={name} />
                            </div>
                        </div>
                    </div>
                    <div className="width-1 inline">
                        <div className="thing-info">
                            <div id="description" className="thing-info-content rendered-markdown">
                                <h1 className="thing-component-header sumary">Summary</h1>
                                <p>
                                    {description_html}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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

