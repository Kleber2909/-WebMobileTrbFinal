import React, { Component } from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom'
import Barra from './Barra';
import PedidoForm from './PedidoForm'
import Menu from './Menu'

class Pedido extends Component {
  render() {

    if (this.props.redirect) {
      return <Redirect to='/' />
  }
    return (
      <div>
        <Barra nomeTela='Novo pedido'/>
        <PedidoForm onSubmit={this.props.addPedido} />
        <Menu />
        </div>
    );
  }

}


export default Pedido