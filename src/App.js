import React, { Component } from 'react';
import axios from 'axios';

import Timeline from "./components/Timeline";
import Sidebar from "./components/Sidebar";
import Loading from "./components/UI/Loading";

import './App.scss';

class App extends Component {

  state = {
    isLoading: true,
    timelineCardData: null
  };

  componentDidMount() {
    axios.get('TimelineCards.json')
      .then(res => {
        this.setState({
          isLoading: false,
          timelineCardData: res.data
        });
      })
  };

  render() {

    const content = (
      <>
        <Sidebar />
        <Timeline timelineCardData={this.state.timelineCardData}/>
      </>
    );

    return (
      <div className="App">
        { !this.state.isLoading ? content : <Loading /> }
      </div>
    );
    
  }
}

export default App;
