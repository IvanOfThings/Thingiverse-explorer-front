import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import ApolloClient from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { setContext } from 'apollo-link-context';
import { useCookies } from './components/customHooks/useCookies';

import { SiteHeader } from './components/SiteHeader';
import { Home } from './pages/Home';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';
import AuthorizationRequest from './components/AuthorizationRequest';

import 'bulma/css/bulma.css';

import './App.css';

const App: React.FC = (props) => {
  const [access_token, setAccess_token] = useCookies("access_token");

  const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_BACK_GRAPHQL_URL}`
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: access_token ? `Bearer ${access_token}` : "",
      }
    }
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return (
    <div className="App" >
      <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
          <div id="wrapper">
            <div className="page-container">
              <div id="navbar">
                <SiteHeader />
              </div>
              <div id="main">
                <BrowserRouter>
                  <AuthorizationRequest />
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
export default App;
