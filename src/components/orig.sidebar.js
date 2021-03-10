import {useState}  from 'react'

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

// import LangCheckboxes from './langchecks'
import Codes from './codes'
import Dates from './dates'
import Search from './search'
import Checkboxes from './checkboxes'
import { Typography } from '@material-ui/core';

import MoreInfo from './moreinfo';

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

  const container = window !== undefined ? () => window().document.body : undefined;

    // const [ lang, setLang ] = useState('Albanian')
    // const [ code, setCode ] = useState('')
    // const [ date, setDate ] = useState([1850, 1950])
    const drawer = (
        <div>
          {/* <div className={classes.toolbar} /> */}
          <MoreInfo activalue={0} text="Learn more about the FLPS"/>
          <SecLabel classes={classes} text={'Search Text'} />
          <Search search={search} setSearch={setSearch} />
          <SecLabel classes={classes} text={'Specify Date Range'} />
          <Dates setDate={setDates} date={dates} setPage={setPage} />
          <SecLabel classes={classes} text={'Select Language/Group'} />
          <Checkboxes classes={classes} setLang={setLang}/>
          <SecLabel classes={classes} text={'Select Category'} code={true} />
          <MoreInfo activalue={5} text="Learn more" />
          <Codes setCode={setCode} setPage={setPage} codeCount={codeCount} classes={classes} codeText={codeText} setCodeText={setCodeText} />
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


const SecLabel = props => <Typography className={props.code ? props.classes.code : props.classes.seclabel} variant="h6">{props.text}</Typography>
const CodeKey = () => <div>FLPS had codes and no one understands them</div>
