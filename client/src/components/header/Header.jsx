import { AppBar, Box, Toolbar, makeStyles, Typography, Drawer, IconButton, List, ListItem } from "@material-ui/core"
import { Link } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import { useState } from "react";

//components
import Search from './Search';
import HeaderButtons from './HeaderButtons';


const useStyle = makeStyles(theme => ({
    header: {
        background: '#17202A'
    },

    heading: {
        fontSize: 24,
        fontStyle: 'italic',
    },
    logo: {
        width: 70,
        marginLeft: 0,
        marginRight:2

    },
    component: {
        marginLeft: '10%',
        lineHeight: 0
    },
    list: {
        width: 250
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('sm')]: {
            display:'block'
        }
    },
    headerButtons:{
        margin:'0 5px 0 auto',
        [theme.breakpoints.down('sm')]: {
            display:'none'
        }
    }
}
));

const Header = () => {
    const classes = useStyle();

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () =>  (
            <Box className={classes.list} onClick={handleClose}>
                <List>
                    <ListItem button>
                        <HeaderButtons />
                    </ListItem>
                </List>
            </Box>
        )
    

    return (
        <AppBar className={classes.header}>
            <Toolbar>
                <IconButton
                    color='inherit'
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>


                <Link to='/' className={classes.component}>
                    <img src="./d.jpg" className={classes.logo} />
                    <Typography className={classes.heading}></Typography>
                </Link>
                <Search />
              <span className={classes.headerButtons}><HeaderButtons /></span>
            </Toolbar>

        </AppBar>
    )
}

export default Header;