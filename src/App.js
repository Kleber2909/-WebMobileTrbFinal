import React, {Component} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Acompanhamento from './components/Acompanhamento'
import Pedido from './components/Pedido'
import Resumo from './components/Resumo'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
            <Switch>
              <Route exact path='/' component={Acompanhamento} />
              <Route path='/Todos' component={Resumo} />
              <Route path='/Pedido' component={Pedido} />
            </Switch>
        </Router>
      </div>

    );
  }
}