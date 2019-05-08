import React, { Component } from 'react';
import Layout from './presentation/Layout';
import Chronometer from './container/Chronometer';
import History from './container/History';
import { Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Chronometer} />
        <Route path="/history" component={History} />
      </Layout>
    )
  }

}

export default App;
