import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';

import Menu from "./components/Menu/Menu";
import Intro from "./components/Intro/Intro";
import Timeline from "./components/Timeline/Timeline";
import Loading from "./components/UI/Loading/Loading";

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
      <React.Fragment>
        <div className="Sidebar__container">
          <Menu />
          <Intro />
        </div>
        <Timeline timelineCardData={this.state.timelineCardData}/>
      </React.Fragment>
    );

    return (
      <div className="App">
        { !this.state.isLoading ? content : <Loading /> }
      </div>
    );
    
  }
}

export default App;
