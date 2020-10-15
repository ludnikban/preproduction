import React from 'react';
import {Route, Link, Switch} from 'react-router-dom'
import AppReact from './components/AppReact';
import AppRedux from './components/AppRedux';

class App extends React.Component {

  render() {

    const section = {
      padding: "10px 20px",
      textAlign: "center",
      fontSize: "22px"
    }

    return (
      <section style={section}>
        <button><Link to={{pathname: "/react", state: {}}}>Список на React</Link></button>
        <button><Link to={{pathname: "/redux", state: {}}}>Список на Redux</Link></button>
        <hr/>
        <Switch>
          <Route path="/react" component={AppReact}/>
          <Route path="/redux" component={AppRedux}/>
        </Switch>
      </section>
    )
  }
}

export default App
