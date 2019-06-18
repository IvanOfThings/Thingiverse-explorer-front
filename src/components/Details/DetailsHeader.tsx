import React from 'react';
import { Link } from 'react-router-dom';


import { Creator } from '../../common/types/Creator';
import './Details.css';


interface DetailsHeaderProps {
    id: number
    creator: Creator,
    dateTime: string
    productName: string
}


export const DetailsHeader: React.FC<DetailsHeaderProps> = (props) => {
    const { id, creator, dateTime, productName } = props;
    return (
        <div className="item-page-header">
            <span className="inline">
                <Link to={`/detail/${id}`} className="avatar-link"  >
                    <div className="avatar-wraper" >
                        <img data-src="" src={creator.thumbnail} className="avatar" alt={creator.name} />
                    </div>
                </Link>
            </span>
            <div className="item-page-info">
                <h1>{productName}</h1>
                <span>by <Link to={`/detail/${id}`} >{creator.name}</Link></span>
                <span>{dateTime}</span>
            </div>
        </div>
    );
}