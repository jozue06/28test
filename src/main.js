import React from 'react';
import ReactDOM from 'react-dom';
import ID from 'uuid';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Homepage from './components/homepage.js';
import RedditApp from './components/appReddit.js';
import CowApp from './components/appCow.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'My Routed React App'
    };
  }

  render() {
    return <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/reddit">Reddit</Link></li>
            <li><Link to="/cowsay">Cowsay</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
        <h1>{this.state.title}</h1>
        <Route exact path="/" component={Homepage} />
        <Route path="/reddit" component={RedditApp} />
        <Route path="/cowsay" component={CowApp} />
      </div>
    </Router>;
  }
}

let root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App/>, root);