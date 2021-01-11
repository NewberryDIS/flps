import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
      margin: theme.spacing(2),
      '& > *': {
        margin: 'auto',
    },
  },
}));

export default function Paginat(props) {
  const classes = useStyles();
  const pageCount = Math.floor(props.resultCount / 25)
  console.log(pageCount)
  const handleChange = (o,p) => {
    console.log(p)
    props.setPage(p)
  }
  return (
    <div className={classes.root}>
      <Pagination onChange={(o,p) => handleChange(o,p)} count={pageCount} />
    </div>
  );
}