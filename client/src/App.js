import React, { Component } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/Menu';
import Main from './pages/Main';
// import Launches from './Pages/Launches';
// import Crew from './Pages/Crew';
import Rockets from './pages/Rockets';
// import NewLaunches from './Pages/NewLaunches';

import { BodyContainer, InfoContent } from './asset/styles/styles';


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <BodyContainer>
            <Menu />
            <InfoContent>
              <Route exact path="/" component={Main} />
              {/* <Route exact path="/lancamentos" component={Launches} />  */}
              <Route exact path="/foguetes" component={Rockets} />
              {/* <Route exact path="/equipe" component={Crew} /> */}
              {/* <Route exact path="/novos-lancamentos" component={NewLaunches} /> */}
            </InfoContent>
          </BodyContainer>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;