import { useState, useEffect }  from 'react'

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

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Loading from './components/loading';

// dark: rgb(30, 136, 229)
// med: rgb(89, 167, 235)
// light: rgb(157, 203, 243)

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
  spacer: { 
    paddingTop: '7vh', 
    background: 'transparent',
    border: 'none'
  },
  drawerPaper: {
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    width: drawerWidth,
  },
  content: {
    // width: '80%',
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
    // width: '80%',
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
    flex: 1,
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

  },
  checkboxes: {
    margin: '0 auto',
    width: '100%',
  },
  filterlists: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    overflow: 'auto',
    maxHeight: '300px',    
    boxShadow: 'inset 0px 3px 1px -2px rgb(0 0 0 / 20%), inset 0px 2px 2px 0px rgb(0 0 0 / 14%), inset 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  buttongroup:{
    align: 'center',
    // display: 'block',
    // width: '100%',
    margin: '10px auto',
  },
  seclabel: {
    fontSize: '0.90rem',
    textTransform: 'uppercase',
    fontWeight: '700',
    width: '90%',
    margin: '10px auto',
  },
  code: {
    fontSize: '0.90rem',
    textTransform: 'uppercase',
    fontWeight: '700',
    width: '90%',
    margin: '20px auto 0 auto',
  },
  button: {
    margin: '10px auto',
    backgroundColor: 'rgb(157, 203, 243)',
    '&:hover': {
      backgroundColor: 'rgb(89, 167, 235)',
    }
  },
  counts: {
    fontFamily: "'Bembo W01', Cardo, serif",
    fontSize: '1.6rem',
    color: 'black',
    flex: '1',
    textAlign: 'right',
  },
  codelistitem: {
    textTransform: 'uppercase',
    '& .MuiTypography-body1': {
      fontSize: '0.75rem',

    },

    '& label': {
      position: 'relative',
      left: '-22px',
    },
  },

  treeroot: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    overflow: 'auto',
    maxHeight: '300px',    
    padding: '5px',
      boxShadow: 'inset 0px 3px 1px -2px rgb(0 0 0 / 20%), inset 0px 2px 2px 0px rgb(0 0 0 / 14%), inset 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  mainwrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  questions: {
    textAlign: 'center',
    display: 'block',
    width: '65%',
    margin: '80px auto 0 auto',
    padding: '25px',
    lineHeight: '1.5rem',
    position: 'relative',
    right: '0',
    border: '1px solid rgb(89, 167, 235)',
    '& a': {
      color: 'black',
      textDecoration: 'underline',
    }
  },
  spacer: {
    padding: '2vmin',
  }
}));

const Spacer = ({classes}) => <div className={classes.spacer} />

function App(props) { 
// css
  const classes = useStyles();
// filters
  const [ lang, setLang ] = useState('')
  const [ code, setCode ] = useState('')
  const [ dates, setDates ] = useState([1850, 1950])
  const [ search, setSearch ] = useState('')
  const [ count, setCount ] = useState(0)
  const [ codeCount, setCodeCount ] = useState(0)
// mobile utility
  const [ mobileOpen, setMobileOpen ] = useState(false)
  const { window } = props;
// data GET
  const [ results, setResults ] = useState([])
  const [ page, setPage ] = useState(0)
  const [ loading, setLoading ] = useState(true)
//http://localhost:3002/php.php?code=&lang=&date1=1850&date2=1950&s=&p=0
//http://localhost:3002/php.php?code=&lang=&date1=1850&date2=1950&s=&p=0
  
  useEffect(() => {
    // production: 
    const url = 'https://flps.newberry.org/php.php?code=' + code + '&lang=' + lang + '&date1=' + dates[0] + '&date2=' + dates[1] + '&s='  + search + '&p=' + page
    // testing & dev: 
    // const url = 'http://localhost:3002/php.php?code=' + code + '&lang=' + lang + '&date1=' + dates[0] + '&date2=' + dates[1] + '&s='  + search + '&p=' + page
    console.log("url", url)
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result on fetch: ", result)
          setLoading(false)
          setResults(result)
          // setCodeCount(result[2])
          // setCount(result[1][0]['COUNT(*)'])
        },
        (error) => {
          setLoading(false)
          console.log("error on fetch: ", error)
        }
      )
    
  }, [lang, code, dates, search, page])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const theme = useTheme();

  const mqwidth = useMediaQuery('(min-width:1000px)');
console.log(results)
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
          <Typography variant="h4" element="h1" noWrap>
            <Link href="/" className={classes.homelink}>{mqwidth ? 'Foreign Language Press Survey' : 'FLPS' } </Link>
          </Typography>

            <Typography className={classes.counts}>{loading ? 'Loading..' : count  + ' result' + (count > 1 || count === 0 ? 's' : '')}.</Typography>
        </Toolbar>
      </AppBar>
      <Sidebar 
        lang={lang}
        setLang={setLang}
        dates={dates}
        setDates={setDates}
        code={code} 
        setCode={setCode}
        codeCount={codeCount}
        search={search}
        setSearch={setSearch}
        page={page}
        setPage={setPage}
        classes={classes} 
        handleDrawerToggle={handleDrawerToggle} 
        mobileOpen={mobileOpen} 
        theme={theme}
        window={window}
        results={results}
        />
        <div className={classes.mainwrapper}><Spacer classes={classes} />
          {/* <Typography className={classes.questions} variant="overline" size="small"  >
            This site is undergoing revision; please check back as we continue to add functionality. <br />Questions or comments? Contact <a target="_blank" href="mailto:dis@newberry.org" target="_blank" rel="noopener noreferrer">dis@newberry.org<span aria-label="(opens in new tab)"></span></a>
          </Typography> */}
          {loading ? <Loading /> : <Main results={results} search={search} classes={classes} />}
        </div>
    </div>
  );
}

export default App;
