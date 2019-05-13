import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';

// import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Timeline from "./components/Timeline/Timeline";

class App extends Component {

  state = {
    isLoading: true,
    timelineCardData: null
  };

  componentDidMount() {
    axios.get('TimelineCards.json')
      .then(res => {
        console.info(res.data);

        this.setState({
          isLoading: false,
          timelineCardData: res.data
        });
      })
  };

  render() {

    return (
      <div className="App">
        <Intro />
        { !this.state.isLoading ? <Timeline timelineCardData={this.state.timelineCardData}/> : <span>Still Loading...</span> }
      </div>
    );
    
  }
}

export default App;
