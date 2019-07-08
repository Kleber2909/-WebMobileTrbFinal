import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Barra from './Barra';
import Menu from './Menu'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { atualizaPedido, excluir } from '../actions/pedidoActions'

const AcompanhamentoPedidos = props => {
    const { pedidos } = props
    const classes = stylos();

    const lista = pedidos.filter(p => p.status !== 0)

    //console.log('AcompanhamentoPedidos', pedidos);
    
    function getCor(status) {
        switch (status) {
            case 1:
                return '#78bff8' // Azul claro
            case 2:
                return '#fbff80' // Amarelo claro
            case 3:
                return '#7ec881' // Verde claro
            case 4:
                return '#a1a1a1' // Cinza claro
            default:
                return '#f8818f' // Vermelho claro
        }
    }

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="container">
            <Barra nomeTela='Acompanhamento'/>
            {lista.map(pedi => {
                return (
                    <ExpansionPanel expanded={expanded === pedi.id} onChange={handleChange(pedi.id)} >
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} style={{ backgroundColor: `${getCor(pedi.status)}` }}>
                            <Typography> {pedi.nome} </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography >{pedi.descricao}</Typography>
                        </ExpansionPanelDetails>
                        <ExpansionPanelDetails>
                            <Button className={classes.botaoNext} onClick={() => { if(pedi.status !== 4) props.atualizaPedido(pedi)}}>
                                <PlayArrow />
                            </Button>
                            <Button className={classes.botaoCancel} onClick={() => { props.excluir(pedi)}}>
                                <Delete />
                            </Button>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                )
            })}
            <Menu />
        </div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ atualizaPedido, excluir }, dispatch);

export default connect(null, mapDispatchToProps)(AcompanhamentoPedidos)

const stylos = makeStyles(theme => ({
    root: {
        width: '100%',
        //maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    cliente: {
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    nested: {
        paddingLeft: theme.spacing(2),
    },
    botaoNext: {
        backgroundColor: '#4CAF50',
        width: '45%',
        padding: '3%',
    },
    botaoCancel: {
        backgroundColor: 'red',
        width: '45%',
        padding: '3%',
        marginLeft: '8%',
    },
}));