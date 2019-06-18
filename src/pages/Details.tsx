
import React from 'react';
import { ThingsData } from '../common/types/Thing'
import { Button } from '../components/Button'
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

import { ConditionalMessage } from '../components/ConditionalMessage';
import { ImageSize } from '../common/types/Image';
import { Thing } from '../components/Thing/Thing';

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

    let loadingView = <span>Loading...</span>;
    let loadedView = <span>Resource not found</span>;

    if (data && data.thing) {
        const { name, default_image, thumbnail, creator, added, collect_count, like_count } = data.thing;

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
                        <a className="avatar-link" href="#" >
                            <div className="avatar-wraper" >
                                <img data-src="" src={creator.thumbnail} className="avatar" alt={creator.name} />
                            </div>
                        </a>
                    </span>
                    <div className="item-page-info">
                        <h1>{name}</h1>
                        <span>by <a href="#">{creator.name}</a></span>
                        <span>{dateTime}</span>
                    </div>
                </div>
                <div className="justify">
                    <div className="inline width-3 gallery-holder">
                        <div className="gallery page-gallery">
                            <div className="gallery-main gallery-section">
                                <img src={imageUrl} alt={name} />
                            </div>
                        </div>
                    </div>
                    <div className="inline width-1 item-list-interactions top_content">
                        <div className="item-interactions justify">
                            <div className="interaction">
                                <span className="center">
                                    <a href="#" className="icon icon-comment center " title="Collect">
                                        Like     <span className="interaction-count">{like_count}</span>
                                    </a>
                                </span>
                            </div>
                            <div className="interaction">
                                <span className="center">
                                    <a href="#" className="icon icon-comment center " title="Collect">
                                        Collect      <span className="interaction-count">{collect_count}</span>
                                    </a>
                                </span>
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
            <ConditionalMessage condition={loading} hidden={!loading} message1={"Loading..."} message2={"Resource not Found."} />
            {loading ? <div></div> : loadedView}
        </div>
    );

}

