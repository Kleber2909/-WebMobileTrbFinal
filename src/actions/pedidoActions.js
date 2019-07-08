import * as types from './actionTypes'
import axios from 'axios'
import { reset as resetForm } from 'redux-form'
//import { Link } from 'react-router-dom';

const URL = 'http://localhost:3004/pedidos'


export function loadPedidos() {
  return dispatch => {
    axios.get(URL)
      .then(pedidos => {
        console.log('loadPedidos', pedidos.data);
        dispatch(loadSuccess(pedidos.data))
      })
  }
}

export function atualizaPedido(pedido) {
  console.log('atualizaPedido', pedido)
  if (pedido.status < 4) {
    pedido.status = pedido.status + 1;
    return dispatch => {
      console.log('dispatch atualizaPedido ', pedido)
      axios.put(`${URL}/${pedido.id}`, pedido)
        .then(retorno => {
          dispatch(loadPedidos())
        })
    }
  }
}

export function excluir(pedido) {
  console.log('deletar', pedido)
  pedido.status = 0;
  return dispatch => {
    console.log('dispatch deletar ', pedido);
    axios.put(`${URL}/${pedido.id}`, pedido)
      .then(retorno => {
        dispatch(loadPedidos())
      })
  }
}

export function addPedido(pedido) {
  pedido.status = 1
  pedido.id = Math.floor(Math.random() * 10000000);

  console.log('addPedido', pedido)
  return dispatch => {
    console.log('dispatch addPedido ', pedido)
    axios.post(URL, pedido)
      .then(response => {
         dispatch(resetForm('frmPedido'))
         dispatch({ type: types.ADD_PEDIDO })
      })
  }
}


export default function loadSuccess(pedidos) {
  return { type: types.LISTA_DE_TODOS_PEDIDOS, pedidos }
}