import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


import MoreInfo from './moreinfo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  descr: {
    width: '90%',
    // display: 'block',
    margin: '15px 5% 0 5%',
    padding: '15px 5% 0 5%',
  },
  cflps: {
      fontWeight: 700,
  },
  accdet: {
    paddingTop: '0',
    flexDirection: 'column',
    '& .MuiAccordionDetails-root': {
      paddingTop: '0',
    }
  },
  clear: {
    '& :hover': {
      textDecoration: 'none',
    }
  },
  resetbutton: {
    display: 'block',
    margin: '10px auto',
    '&:hover': {

      textDecoration: 'none',
    },
    // '& *': {

    //   textDecoration: 'none',
    // } 
  },
  buttonwrapper: {
    textAlign: 'center',
    width: '100%',
  },
  learnmore: {
    textAlign: 'center',
    width: '100%',
    padding: 0,
    '& *': {
      width: '100%',
      padding: 0,
      
      margin: '0 auto',
    },
  },
  button: {
    margin: '10px auto',
    backgroundColor: 'rgb(157, 203, 243)',
    '&:hover': {
      backgroundColor: 'rgb(89, 167, 235)',
    }
  },
}));

const Sidebar = ({
    classes, 
    handleDrawerToggle, 
    mobileOpen, 
    theme, 
    window,
}) => {
  const accordionClasses = useStyles();
  const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
      <div>
        <div className={accordionClasses.root}><div className={accordionClasses.descr}>
          <Typography variant="body2" display="inline">The </Typography> <Typography display="inline" variant="body2"className={accordionClasses.cflps} >Chicago Foreign Language Press Survey</Typography><Typography variant="body2" display="inline"> was published in 1942 by the Chicago Public Library Omnibus Project of the Works Progress Administration of Illinois. The purpose of the project was to translate and classify selected news articles that appeared in the foreign language press from 1855 to 1938. The project consists of 120,000 typewritten pages translated from newspapers of 22 different foreign language communities of Chicago.</Typography>
        </div>
        <MoreInfo activalue={0} text="Read more about this historic project."/>

        </div>
    </div>
    );
    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer><div></div>
        </Hidden>
        </nav>
    )
}

export default Sidebar


// const SecLabel = props => <Typography className={props.code ? props.classes.code : props.classes.seclabel} variant="h6">{props.text}</Typography>
// const CodeKey = () => <div>FLPS had codes and no one understands them</div>
