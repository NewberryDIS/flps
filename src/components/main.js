import { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FlpsCard from './card'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
// import Paginat from './paginat'
import codeMaster from '../data/codes.json'

const Main = ({classes, lang, code, dates, search, page, setPage, setCodeCount, codeText}) => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [resultCount, setResultCount] = useState(1)
    let formattedLang = lang === 'Puerto Rican' ? 'porto%rican' : lang === 'Guatemalan' ? 'guatamalian' : lang === 'All Groups and Languages' ? '%' : lang.replace(' ', '%')
    const url = 'http://localhost:3002/?code=' + code + '&lang=' + formattedLang + '&dates=' + dates[0] + dates[1] + '&s='  + search + '&p=' + page
    useEffect(() => {
        fetch(url)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true)
              setItems(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )//myArray.find(x => x.id === '45').foo;
          const codesUrl = 'http://localhost:3002/codecount/?code=' + code + '&lang=' + formattedLang + '&dates=' + dates[0] + dates[1] + '&s='  + search
          fetch(codesUrl)
          .then(res => res.json())
          .then(
            (result) => {
              const codeCounts = mapToProp(result, 'code_id')
              setCodeCount(codeCounts)
              // const counts = result.map(r => {

              // })
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [lang, code, dates, search, page])

    return (
        
        <main className={classes.content}>
            <div className={classes.toolbar} />

            {/* <Paper elevation={3} variant="outlined" className={classes.langheader}>
                <Typography variant="h4">
                    {lang + (code !=='' ? ', ' + code : '') + (dates !== [0,2000] ? ', ' + dates[0] + ' - ' + dates[1] : '')} 
                </Typography>
            </Paper> */}
            <Card className={classes.headercard} elevation={3} variant="outlined">
        <CardHeader
            title={lang + (codeText !=='' ? ', ' + codeText : '') + (dates !== [0,2000] ? ', ' + dates[0] + ' - ' + dates[1] : '')}
            className={classes.langheader}
        />
        </Card>
                {!isLoaded ? 'Loading...' : <CardSection data={items} classes={classes} searchTerm={search} />}
    </main>
    )
}

export default Main


const colors = [
    ['#43a047', '#76d275', '#c8e6c9'],
    ['#00897b', '#4ebaaa', '#b2dfdb'],
    ['#00acc1', '#00acc1', '#b2ebf2'],
    ['#039be5', '#63ccff', '#b3e5fc'],
    ['#1e88e5', '#6ab7ff', '#bbdefb'],
    ['#7cb342', '#aee571', '#dcedc8']
  ]

const CardSection = ({data, classes, searchTerm}) => {
    const noResults = <Paper className={classes.noresults}><Typography>No Results.</Typography></Paper>
    const cards = data.map((i, index)=> {
        const randomColor = colors[index % 6]
        return <FlpsCard item={i} key={index} colorz={randomColor} searchTerm={searchTerm} />
    })
    return <>{cards.length > 0 ? cards : noResults}</>
  }
  


function countDupes(array_elements) {
  // array_elements = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

  array_elements.sort();

  var current = null;
  var cnt = 0;
  for (var i = 0; i < array_elements.length; i++) {
      if (array_elements[i] !== current) {
          if (cnt > 0) {
              document.write(current + ' comes --> ' + cnt + ' times<br>');
          }
          current = array_elements[i];
          cnt = 1;
      } else {
          cnt++;
      }
  }
  if (cnt > 0) {
      document.write(current + ' comes --> ' + cnt + ' times');
  }

}


function mapToProp(data, prop) {
  return data
    .reduce((res, item) => Object
      .assign(res, {
        [item[prop]]: 1 + (res[item[prop]] || 0)
      }), Object.create(null))
  ;
}
