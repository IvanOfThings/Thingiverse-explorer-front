import React from 'react';


import './Details.css';


type DetailsContentProps = {
	productName: string,
	imageUrl: string
}


export const DetailsContent: React.FC<DetailsContentProps> = (props) => {
	const { imageUrl, productName } = props;
	return (
		<div className="justify">
			<div className="inline width-2 gallery-holder">
				<div className="gallery page-gallery">
					<div className="gallery-main gallery-section">
						<img src={imageUrl} alt={productName} />
					</div>
				</div>
			</div>
			<div className="width-1 inline">
				<div className="thing-info">
					<div id="description" className="thing-info-content rendered-markdown">
						<h1 className="thing-component-header sumary">Summary</h1>
						<p>
							{props.children}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}