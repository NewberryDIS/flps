import {useState}  from 'react'

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import LanguageMenu from './languages'
import Codes from './codes'
import Dates from './dates'
import Search from './search'

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
          <div className={classes.toolbar} />
          <LanguageMenu setLang={setLang} setDates={setDates} setCode={setCode} setPage={setPage} />
          <Search search={search} setSearch={setSearch} />
          <Dates setDate={setDates} date={dates} setPage={setPage} />
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
          </Drawer>
        </Hidden>
        </nav>
    )
}

export default Sidebar
