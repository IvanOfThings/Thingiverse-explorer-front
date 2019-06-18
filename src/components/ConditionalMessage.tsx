import React from 'react';

type ConditionalMessageProps = {
	hidden: boolean,
	condition: boolean,
	message1: string,
	message2: string
}

export const ConditionalMessage: React.FC<ConditionalMessageProps> = (props) => {
	return (		
		<div className={"center_content top_content bottom_content explore " + (props.hidden ? "hidden" : "")}>
		<span className="content-center message"><h1>{props.condition ? props.message1 : props.message2}</h1></span>
		</div>
	);
}

