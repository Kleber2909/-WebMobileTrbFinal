import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  list: [],
  pedido: [], 
  redirect: false
}

export default function devReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.ADD_PEDIDO:
      return { ...state, redirect: true }
    case actionTypes.LISTA_DE_TODOS_PEDIDOS:
      return { ...state, list: action.pedidos }
    default:
      return state
  }
}