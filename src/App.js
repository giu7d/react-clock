import React, { Component } from 'react';
import Layout from './presentation/Layout';
import Chronometer from './container/Chronometer';
import History from './container/History';


class App extends Component {
  
  render() {

    return (
      <Layout>
        <Chronometer />
        <History />
      </Layout>
    )
  }

}

export default App;
