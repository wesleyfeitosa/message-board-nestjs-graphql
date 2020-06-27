import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './pages/Home';
import Board from './pages/Board';
import api from './services/api';

import './styles.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={api}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/board" component={Board} />

          <Route path="/" component={() => <h1>404 - Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
