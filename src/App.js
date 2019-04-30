import React, { Component } from 'react';
import Layout from './presentation/Layout';
import Timer from './container/Timer';
import History from './container/History';


class App extends Component {
  
  render() {

    return (
      <Layout>
        <Timer />
        <History />
      </Layout>
    )
  }

}

export default App;
