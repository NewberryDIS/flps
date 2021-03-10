import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  button: {
    position: 'relative',
    right: '0',
    backgroundColor: 'rgb(157, 203, 243)',
    '&:hover': {
      backgroundColor: 'rgb(89, 167, 235)',
    }
  }
});

function valuetext(value) {
  return `${value}`;
}

export default function Dates(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState([1850, 1950]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className={classes.root}>
      <ThemeProvider theme={muiTheme} >
        <Slider
          value={value}
          onChange={handleChange}
          aria-labelledby="date-slider"
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          min={1850}
          max={1950}
          />
      </ThemeProvider>
      <Button className={classes.button} onClick={() => props.setDate(value)} variant="contained" size="small">Set Date Range</Button>
    </div>
  );
}



const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "#1e88e5;",
    },
    valueLabel: {
      backgroundColor: 'transparent',
      color: 'rgb(30, 136, 229)',
      top: '-15px',
      '& span': {
          height: '20px',
          backgroundColor: 'transparent',
          transform: 'rotate(0deg)',
        },
        '& > span > span': {
          color: 'rgb(30, 136, 229)',
        },
      },
    }
}
});

