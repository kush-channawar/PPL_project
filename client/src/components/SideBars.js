import React,{ Fragment , Component, useState} from 'react';
import { Link} from 'react-router-dom'; 
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './styles.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor : "#5dbcd2",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {

    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    backgroundColor :"#121212",
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      textcolor : "white",
      
    }),
  },
  pos : {
    position : "relative",
},
  drawerClose: {
    
    transition: theme.transitions.create('width', {
      
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor :"#121212",
  },
  toolbar: {
    
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));



const SideBars = ({ setAuth }) => {
 
  


  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
    

  const handleDrawerOpen = () => {
    setOpen(true);
    
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
   <Fragment>
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
          
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
             
            <MenuIcon />
            
          </IconButton>
          <h3 className="float-center">INVOICE</h3>
          <Typography variant="h6"  noWrap>
   
    
   <div className="right">
    <button class="btn btn-warning " ><Link to="/logout"> Logout</Link></button>
    &#160;	&#160;	&#160;	&#160;
    <Badge badgeContent={4} color="secondary" >
        <NotificationsIcon />
      </Badge>
   </div>
    </Typography>
    <Typography noWrap>
    <IconButton color="inherit">
      <div className ="rightbad">
     
      </div>
     
    </IconButton>
    </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
        
          <IconButton onClick={handleDrawerClose}>
          <header className="text-center" style={{color:"white" }}>Main Menu &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;</header>
            {theme.direction === 'rtl' ? <ChevronRightIcon className="white"/> : <ChevronLeftIcon className="white"  />}
          </IconButton>
         
        </div>
        <Divider />
        <List>
          {['Add User', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{color:"white"}}>{index % 2 === 0 ? <PersonAddIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} style={{color:"white"}} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon style={{color:"white"}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} style={{color:"white"}} />
            </ListItem>
          ))}
        </List>
        <List wrap>
          {[ <Link to="/logout">Logout</Link>].map((button,index) => (
            <ListItem button key={button} >
              
              <ListItemIcon style={{color:"white"}}> <PersonAddIcon  /> </ListItemIcon>
            <ListItemText primary = {button} style={{color:"white"}} />
           
            </ListItem>
          ))}
        
        </List>
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
    </Fragment>
  );
}
export default SideBars;