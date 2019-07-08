import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ResumoPedidos from './ResumoPedidos'
import { loadPedidos } from '../actions/pedidoActions'

class Resumo extends Component {
    componentDidMount() {
        this.props.loadPedidos()
    }

    render() {
        return (
            <ResumoPedidos props={this.props} pedidos={this.props.pedidos} />
        );
    } 
}

const mapStateToProps = state => ({ pedidos: state.pedidos.list });
const mapDispatchToProps = dispatch => bindActionCreators({ loadPedidos }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Resumo)
