import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';

import Header from "./components/Header/Header";
import Timeline from "./components/Timeline/Timeline";

class App extends Component {

  state = {
    isLoading: true,
    timelineItemData: null
  };

  componentDidMount() {
    axios.get('TimelineItemsJSON.json')
      .then(res => {
        this.setState({
          isLoading: false,
          timelineItemData: res.data
        });
      })
  };

  render() {

    return (
      <div className="App">
        <Header />
        { !this.state.isLoading ? <Timeline timelineItemData={this.state.timelineItemData}/> : <span>Still Loading...</span> }
      </div>
    );
    
  }
}

export default App;
