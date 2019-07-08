import { combineReducers } from 'redux'
import pedidos from './pedReducer'
import { reducer as fromReducer } from 'redux-form'

const rootReducer = combineReducers({
    pedidos,
    form: fromReducer,
})

export default rootReducer