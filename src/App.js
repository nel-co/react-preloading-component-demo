import React, { Component } from 'react';
import './App.css';

import { Bounce, Grid, Grow, Lines, Pop, Progress, Pulse, Scan, Spinner, Text, Triple, Wave } from 'react-preloading-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Headline">React-Preloading-Component</div>
        <div className="Loading-wrapper">
          <div className="loading-component">
            <Bounce color="#fff" />
            <div className="loading-name">{'<Bounce />'}</div>
          </div>
          <div className="loading-component">
            <Grid color="#fff" />
            <div className="loading-name">{'<Grid />'}</div>
          </div>
          <div className="loading-component">
            <Grow color="#fff" />
            <div className="loading-name">{'<Grow />'}</div>
          </div>
          <div className="loading-component">
            <Lines color="#fff" />
            <div className="loading-name">{'<Lines />'}</div>
          </div>
          <div className="loading-component">
            <Pop color="#fff" />
            <div className="loading-name">{'<Pop />'}</div>
          </div>
          <div className="loading-component">
            <Progress color="#fff" background="rgba(255, 255, 255, 0.3)" />
            <div className="loading-name">{'<Progress />'}</div>
          </div>
          <div className="loading-component">
            <Pulse color="#fff" />
            <div className="loading-name">{'<Pulse />'}</div>
          </div>
          <div className="loading-component">
            <Scan color="#fff" />
            <div className="loading-name">{'<Scan />'}</div>
          </div>
          <div className="loading-component">
            <Spinner color="#fff" secondaryColor="rgba(255, 255, 255, 0.3)" />
            <div className="loading-name">{'<Spinner />'}</div>
          </div>
          <div className="loading-component">
            <Text color="#fff" />
            <div className="loading-name">{'<Text />'}</div>
          </div>
          <div className="loading-component">
            <Triple color="#fff" />
            <div className="loading-name">{'<Triple />'}</div>
          </div>
          <div className="loading-component">
            <Wave color="#fff" />
            <div className="loading-name">{'<Wave />'}</div>
          </div>
        </div>
        <div className="Footer">
          <span>Built by <a href="http://heyimnelson.com/" target="_blank">Nelson Cothran</a></span>
          <span>View on <a href="https://github.com/nel-co/react-preloading-component" target="_blank">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default App;
