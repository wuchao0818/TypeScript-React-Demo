import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';

import Order from './components/Order'
import OrderDetails from './components/Order/details'
import TodoList from './components/TodoList'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router>
            <div>
                <Route exact = {true} path="/" component={Order}/>
                <Route path="/content/:name" component={OrderDetails}/>
                <Route path="/todo" component={TodoList}/>
            </div>
        </Router>         
      </div>
    );
  }
}

export default App;
