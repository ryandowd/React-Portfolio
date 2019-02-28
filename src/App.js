import React, { Component } from 'react';
import { updateObject } from './shared/utility';
import logo from './logo.svg';
import axios from 'axios';

import './App.css';

import Header from './components/Header/Header';
import Timeline from './containers/Timeline/Timeline';

class App extends Component {

  state = {
    isLoading: true,
    timelineItems: null
  };

  componentDidMount() {
    axios.get('TimelineItemsJSON.json')
      .then(res => {
        this.setState({ 
          isLoading: false,
          timelineItems: res.data
        });
      })
  };

  changeStateHandler = () => {
    const updatedEvent = updateObject(this.state.timelineItems.event1, {
      Location: 'Blah blah',
    });

    const updatedItems = updateObject(this.state.timelineItems, {
      event1: updatedEvent
    });

    this.setState({timelineItems: updatedItems});
  };

  render() {

    return (
      <div className="App">
        <Header changeStateHandler={this.changeStateHandler}/>
        {!this.state.isLoading ? <Timeline timelineItems={this.state.timelineItems}/> : <h3>Loading...</h3>}
      </div>
    );
    
  }
}

export default App;
