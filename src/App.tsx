import React, { useState, Component, PropsWithRef } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import querystring from "querystring";
import axios from 'axios';
import Cookies from 'universal-cookie';
//import ApolloClient from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { setContext } from 'apollo-link-context';

import { SiteHeader } from './components/SiteHeader';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';

import 'bulma/css/bulma.css';

import './App.css';


export const httpLink = createHttpLink({
  uri: "http://localhost:3500/graphql"
});


const authLink = setContext((_, { headers }) => {
  let cookies: Cookies = new Cookies()
  // get the authentication token from local storage if it exists
  let token: null | string = cookies.get("access_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

class App extends Component {


  /*
    renderRedirect = () => {
      let access_token: null | string = window.sessionStorage.getItem('access_token');
      if (!access_token) {
        return <Redirect to='/login' />
      }
      //    { this.renderRedirect() }  
    }*/
  /*
  getToken = (): Promise<Token> => {
    let tokenPromise: Promise<Token> = new Promise<Token>((resolve, reject) => {
      axios({
        method: 'get',
        url: `http://localhost:3500/api/v1/things/token`,
        headers: {
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Header': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        }
      }).then((res) => {
        console.log('Respuesta recibida');
        console.log(res.data);
        if (res.data.access_token) {
          let token = res.data.access_token
          resolve(token);
        } else {
          reject(null);
        }
      }).catch(() => {
        reject(null);
      })
    });
    return tokenPromise;
  }
*/
  componentDidMount() {
    console.log(`Component Did Mount`);

    let cookies: Cookies = new Cookies()
    const searchParams: URLSearchParams = new window.URLSearchParams(window.location.href);
    const code: null | string = searchParams.get("code");
    let access_token: null | string = cookies.get("access_token");
    if (!access_token) {
      console.log(`No hay access token en vigor`);
      if (!code) {

        let queryString = querystring.stringify({
          response_type: "code",
          client_id: "620efe7bf27be202b25c",
          redirect_uri: "http://localhost:3000"
        });

        const uri: string = `https://www.thingiverse.com/login/oauth/authorize?${queryString}`
        window.open(uri);
        window.close();
      } else {
        console.log(`Regenerando access token`);
        axios({
          method: 'get',
          url: `http://localhost:3500/api/v1/things/callback?code=${code}`
        })
          .then((res) => {
            console.log(`Codigo encontrado: ${res}`);
            console.log(res);
            access_token = res.data.access_token;
            if (access_token) {
              cookies.set("access_token", access_token);
            }
          })
          .catch((err) => console.log(err));
      }
    } else {
      console.log(`Access Token en vigor: ${access_token}`);
      /*
      axios({
        method: 'get',
        url: `http://localhost:3500/api/v1/things/newest?access_token=${access_token}`,
        headers: {
          "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Header': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        }
      }).then((res) => {
        console.log('Respuesta recibida');
        console.log(res.data);
    
        this.setState((state, props) => {
          return {
            things: res.data
          }
        });
      })*/
    }

    this.setState({ token: access_token });
  }

  /*
  headers: {
    'Authorization': 'Bearer ' + access_token,
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Header': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
  }*/

  render() {


    return (
      <div className="App" >
        <ApolloProvider client={client}>
          <ApolloProviderHooks client={client}>
            <div id="wrapper">
              <div id="page-container">
                <div id="navbar">
                  <SiteHeader />
                </div>
                <div id="main">
                  <BrowserRouter>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/detail/:id" component={Details} />
                      <Route component={NotFound} />
                    </Switch>
                  </BrowserRouter>
                </div>
              </div>
            </div>
          </ApolloProviderHooks>
        </ApolloProvider>
      </div>
    );
  }
}
export default App;