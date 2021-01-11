import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    margin: '5px auto',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Search(props) {
    const [value, setValue] = useState('')
  const classes = useStyles();
const handleClick = (e) => {
    e.preventDefault()
    console.log(value)
    props.setSearch(value)
}
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search card text..."
        inputProps={{ 'aria-label': 'search card text' }}
        onChange={v => setValue(v.target.value)}
      />
      <IconButton type="submit" className={classes.iconButton} onClick={e => handleClick(e)} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}