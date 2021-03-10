import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

// import LangCheckboxes from './langchecks'
import Codeboxes from './codeboxes'
// import Codes from './codes'
import Dates from './dates'
import Search from './search'
import Langboxes from './langboxes'

import MoreInfo from './moreinfo';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Block } from '@material-ui/icons';


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
  }
}));

const Sidebar = ({
    classes, 
    handleDrawerToggle, 
    mobileOpen, 
    theme, 
    window,
    lang, setLang,
    code, setCode,
    codeText, setCodeText,
    dates, setDates,
    page, setPage,
    search, setSearch,
    codeCount
}) => {
  const accordionClasses = useStyles();

  const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
      <div>
        <div className={accordionClasses.root}><div className={accordionClasses.descr}>
          <Typography variant="body2" display="inline">The </Typography> <Typography display="inline" variant="body2"className={accordionClasses.cflps} >Chicago Foreign Language Press Survey</Typography><Typography variant="body2" display="inline"> was published in 1942 by the Chicago Public Library Omnibus Project of the Works Progress Administration of Illinois. The purpose of the project was to translate and classify selected news articles that appeared in the foreign language press from 1855 to 1938. The project consists of 120,000 typewritten pages translated from newspapers of 22 different foreign language communities of Chicago.</Typography>
        </div>
        <MoreInfo activalue={0} text="Read more about this historic project."/>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={accordionClasses.heading}>Search Text</Typography>
        </AccordionSummary>
        <AccordionDetails className={accordionClasses.accdet}>
          <Search search={search} setSearch={setSearch} />
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={accordionClasses.heading}>Select Groups</Typography>
        </AccordionSummary>
        <AccordionDetails className={accordionClasses.accdet}>
          <Langboxes classes={classes} setLang={setLang} />
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={accordionClasses.heading}>Select Dates</Typography>
        </AccordionSummary>
        <AccordionDetails className={accordionClasses.accdet}>
          <Dates setDate={setDates} date={dates} setPage={setPage} /> 
        </AccordionDetails>
        </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={accordionClasses.heading}>Select WPA Subject Codes</Typography>
        </AccordionSummary>
        <AccordionDetails className={accordionClasses.accdet}>
        <div className={accordionClasses.learnmore}>


        <MoreInfo activalue={5} text="Learn more about these codes."/><br />
</div>
          <Codeboxes setCode={setCode} setPage={setPage} codeCount={codeCount} classes={classes} codeText={codeText} setCodeText={setCodeText} />
        </AccordionDetails>
        </Accordion>
        <div className={accordionClasses.buttonwrapper}>

<Link href="/newversion" className={accordionClasses.resetbutton}><Button variant="contained" className={classes.button}>Reset Search</Button></Link>
        </div>
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
