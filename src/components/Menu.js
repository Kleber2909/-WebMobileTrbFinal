import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Assessment from '@material-ui/icons/Assessment';
import Assignment from '@material-ui/icons/Assignment';
import Add from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            className={classes.root}
        >
            <BottomNavigationAction component={Link} to="/" className={classes.selected} label="" icon={<Assessment style={{ color: 'white' }}/>}  />
            <BottomNavigationAction component={Link} to="/Todos" className={classes.selected} label="" icon={<Assignment style={{ color: 'white' }}/>} />
            <BottomNavigationAction component={Link} to="/Pedido" className={classes.selected} label="" icon={<Add style={{ color: 'white' }}/>} />
        </BottomNavigation>
    );
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#4CAF50',
    },
    selected: {
        color: 'white', // Cor do botão
        backgroundColor: '#4CAF50', // Cor do fundo da barra clicado
    }
});
