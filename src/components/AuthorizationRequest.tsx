import React from 'react';
import { withRouter, RouteComponentProps } from "react-router";
import { useCookies } from './customHooks/useCookies';
import querystring from "querystring";
import axios from 'axios';

function getNewAccesssToken(code: string, setAccess_token: React.Dispatch<React.SetStateAction<string | null>>): void {
	let url = `${process.env.REACT_APP_BACK_API_URL_BASE}${process.env.REACT_APP_BACK_API_URL_TOKEN}?code=${code}`;
	axios({
		method: 'get',
		url: url
	})
		.then((res) => {
			let access_token = res.data.access_token;
			setAccess_token(access_token);
			window.open(process.env.REACT_APP_URL_SITE);
			window.close();
		})
		.catch((err) => console.error(err));
}

const AuthorizatioRequest: React.FC<RouteComponentProps<any>> = (props: RouteComponentProps<any>) => {
	const [access_token, setAccess_token] = useCookies("access_token");
	if (!access_token) {
		const code: string | null = new URLSearchParams(props.location.search).get("code");
		if (!code) {
			let queryString = querystring.stringify({
				response_type: "code",
				client_id: process.env.REACT_APP_CLIENT_ID,
				redirect_uri: process.env.REACT_APP_REDIRECT_URL
			});
			const uri: string = `${process.env.REACT_APP_AUTORIZE_URL}?${queryString}`
			window.open(uri);
			window.close();
			return <h2>Redirecting to the Thingiverse Page to Authorize</h2>;
		} else {
			getNewAccesssToken(code, setAccess_token);
		}
	}
	return <span />;
}
export default withRouter(AuthorizatioRequest);