import {useState}  from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Sidebar from './components/sidebar'
import Main from './components/main'
import nlogo from './images/Nblack.png'
import { Link } from '@material-ui/core';
// import './App.css';


const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'rgba(111,111,111, 0.25)',
  },
  drawer: {
    backgroundColor: 'rgba(111,111,111, 0.25)',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: '#1e88e5',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    '& h4': {
      paddingLeft: '15px',
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    width: drawerWidth,
  },
  content: {
    width: '80%',
    margin: 'auto',
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  intro: {
    width: '80%',
    margin: '15px auto',
    padding: '15px',
  },
  langheader: {
    padding: '15px',
    width: '80%',
    margin: '15px auto',
  },
  noresults: {
    padding: '15px',
    margin: '15px',
  },
  please: {
    textAlign: 'center',
  },
  homelink: {
    color: 'black',
    textDecoration: 'none',
    fontFamily: "'Bembo W01', Cardo, serif",
    '&:hover ': {
      textDecoration: 'none',
    }
  },
  dimmed: {
    fontColor: 'white',
  },
  headercard: {

'& div': {

  fontFamily: "'Bembo W01', Cardo, serif",
},

    maxWidth: '80%',
    margin: '15px auto',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',

  }
}));

function App(props) {

  const classes = useStyles();
  const [ lang, setLang ] = useState('All Groups and Languages')
  const [ code, setCode ] = useState('')
  const [ codeText, setCodeText ] = useState('')
  const [ codeCount, setCodeCount ] = useState()
  const [ dates, setDates ] = useState([1850, 1950])
  const [ search, setSearch ] = useState('')
  const [ mobileOpen, setMobileOpen ] = useState(false)

  const [ page, setPage ] = useState(0)

  const { window } = props;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const theme = useTheme();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Newberry" src={nlogo} variant="square" className={classes.large} />
          <Typography variant="h4" noWrap>
            <Link href="/" className={classes.homelink}>Foreign Language Press Survey</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar 
        lang={lang}
        setLang={setLang}
        dates={dates}
        setDates={setDates}
        code={code} 
        setCode={setCode}
        codeText={codeText} 
        setCodeText={setCodeText} 
        search={search}
        setSearch={setSearch}
        codeCount={codeCount} 
        page={page}
        setPage={setPage}
        classes={classes} 
        handleDrawerToggle={handleDrawerToggle} 
        mobileOpen={mobileOpen} 
        theme={theme}
        window={window}
        />
      <Main code={code} lang={lang} dates={dates} search={search} classes={classes} page={page} setPage={setPage} setCodeCount={setCodeCount} codeText={codeText} />
      <Footer />
    </div>
  );
}

export default App;

const Footer = () => {
  return (
  <div>
    Footer
  </div>
  )
}