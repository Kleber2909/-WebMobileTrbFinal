import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPedido } from '../actions/pedidoActions'

const FrmPedido = props => {
    const { handleSubmit } = props;
    const classes = useStyles();

    return (
        <form onSubmit={handleSubmit((fields) => props.addPedido(fields))} >

            <label className={classes.label}>Nome do Cliente</label>
            <Field className={classes.textField} component='input' name='nome' label='Nome do Cliente'  required/>
            <label className={classes.label}>CPF</label>
            <Field className={classes.textField} component='input' name='cpf' label='CPF' required/>
            <label className={classes.label}>Descricao do pedido</label>
            <Field className={classes.textField} component='input' name='descricao' label='Descricao do pedido' required/>

            <button type="submit" className={classes.botao}> Registrar </button>
        </form>
    );
}

const PedForm = (reduxForm({ form: 'frmPedido' }))(FrmPedido)

const mapDispatchToProps = dispatch => bindActionCreators({ addPedido }, dispatch)
  
export default connect(null, mapDispatchToProps)(PedForm)

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#cacaca',
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '95%',
    },
    label: {
        marginLeft: theme.spacing(1),
    },
    botao: {
        backgroundColor: '#4CAF50',
        width: '95%',
        padding: '5%',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },

}));
