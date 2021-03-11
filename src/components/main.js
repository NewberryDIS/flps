import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FlpsCard from './card'

const Main = ({results, search, classes, handleOpen}) => {
  // console.log(results)
  return (
    <main className={classes.content}>
      {/* <div className={classes.spacer} /> */}
      <CardSection data={results} classes={classes} searchTerm={search} handleOpen={handleOpen} />
    </main>
  )
}

export default Main

const colors = [
    '#59a7eb', '#9dcbf3', '#9dcbf3'
  ]

const CardSection = ({data, classes, searchTerm, handleOpen}) => {
    const noResults = <Paper className={classes.noresults}><Typography>No Results.</Typography></Paper>
    const cards = data.map((i, index)=> {
        return <FlpsCard item={i} key={index} colorz={colors} searchTerm={searchTerm} handleOpen={handleOpen} />
    })
    return <>{cards.length > 0 ? cards : noResults}</>
  }
  