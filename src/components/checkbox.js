import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '2px 0',
  },
  chexlabel: {
    position: 'relative',
    bottom: '2px',
    right: '-2px',
    display: 'blocl',
  }
}))
const Checkbox = ({ label, id, isSelected, onCheckboxChange, doubleid}) => {

  const classes = useStyles();
  return (
  <div className={classes.root}>
    <label>
      <input
        type="checkbox"
        name={id}
        checked={isSelected}
        onChange={onCheckboxChange}
        className="form-check-input"
      /><span className={classes.chexlabel}>

      {doubleid ? id + '. ' + label : label}
      </span>
    </label>
  </div>
)};

export default Checkbox;