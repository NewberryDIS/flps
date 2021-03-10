import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreInfo from './moreinfo'
import Search from './search'
import Checkboxes from './checkboxes'
import Codes from './codeboxes2'
import Dates from './dates'

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
  }
}));

export default function AccordionSidebar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}><div className={classes.descr}>

        <Typography variant="body2" display="inline">The </Typography> <Typography display="inline" variant="body2"className={classes.cflps} >Chicago Foreign Language Press Survey</Typography><Typography variant="body2" display="inline"> was published in 1942 by the Chicago Public Library Omnibus Project of the Works Progress Administration of Illinois. The purpose of the project was to translate and classify selected news articles that appeared in the foreign language press from 1855 to 1938. The project consists of 120,000 typewritten pages translated from newspapers of 22 different foreign language communities of Chicago.</Typography>
    </div>

    <MoreInfo activalue={0} text="Read more about this historic project."/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Search Text</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Search search={props.search} setSearch={props.setSearch} />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Select Groups</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Checkboxes classes={props.classes} setLang={props.setLang}/>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Select Dates</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Dates setDate={props.setDates} date={props.dates} setPage={props.setPage} /> 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Select Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Codes setCode={props.setCode} setPage={props.setPage} codeCount={props.codeCount} classes={props.classes} codeText={props.codeText} setCodeText={props.setCodeText} />
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
