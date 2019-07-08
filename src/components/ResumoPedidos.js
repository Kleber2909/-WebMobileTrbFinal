import React from 'react';
import * as alasql from 'alasql';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import Barra from './Barra';
import Menu from './Menu'

const ResumoPedidos = props => {
  const { pedidos } = props
  const classes = useStyles();

  function getDescStatus(status) {
    switch (status) {
      case 1:
        return 'Novos'
      case 2:
        return 'Em preparação'
      case 3:
        return 'Prontos para pagamento'
      case 4:
        return 'Concluídos'
      default:
        return 'xx'
    }
  }

  //console.log(pedidos.map(p => p.status !== 0))


  var pedidosCount = alasql('SELECT status, COUNT(status) AS Total FROM ? WHERE status != 0 GROUP BY status ORDER BY status', [pedidos]);

  console.log('ResumoPedidos res', pedidosCount)

  return (

    <Paper className={classes.root}>
      <Barra nomeTela='Todos os pedidos' />
      <Table className={classes.table}>
        <TableBody>
          {pedidosCount.map(row => (
            <TableRow key={row.Status}>
              <TableCell component="th" scope="row"> {getDescStatus(row.status)} </TableCell>
              <TableCell align="right">{row.Total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu />
    </Paper>
  );
}

export default ResumoPedidos

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#cacaca',
  },
  root: {
    backgroundColor: '#cacaca',
  },
  table: {
    minWidth: '100%',
  },

}));
