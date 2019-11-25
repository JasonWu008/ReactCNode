import React from 'react'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/index'
import Home from './views/Home/index'
import Profile from './views/Profile/index'
import Topic from './views/Topic/index'
import './App.scss'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header/>
      <HashRouter>
          <div className="box">
            <Route exact path="/" component={Home} />
            <Route path="/topic/:id" component={Topic} />
            <Route path="/user/:id" component={Profile} />
            <Route exact path="/topic" render={() => <Redirect to="/" />} />
            <Route exact path="/user" render={() => <Redirect to="/" />} />
          </div>
      </HashRouter>
    </div>
  );
}

export default App;
