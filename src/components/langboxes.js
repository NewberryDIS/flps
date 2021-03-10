import React, { Component } from "react";
import Checkbox from "./checkbox";
import langs from '../data/langs.json'


import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const OPTIONS = langs.map(l => l.lang);

class Checkboxes extends Component {
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  };

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();
    let retVal = []
    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        retVal.push(checkbox)
        console.log(checkbox, "is selected.");
      });
      this.props.setLang(retVal)
  };

  createCheckbox = option => (
    <Checkbox
      id={option}
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => OPTIONS.map(this.createCheckbox);
    
  render() {
    return (
      <div className={this.props.classes.checkboxes}>
            <form  onSubmit={this.handleFormSubmit}>
              <div className={this.props.classes.filterlists}>

              <label>
                <input
                  type="checkbox"
                  name="select allz"
                  // checked={this.state.selectAll} 
                  onChange={e => this.selectAllCheckboxes(e.target.checked)}
                  className="form-check-input"
                /><span >
                  Select All
                </span>
              </label>
{this.createCheckboxes()}
</div>
<div>
                <Button type="submit" className={this.props.classes.button} variant="contained" >
                  Go
                </Button>
              </div>
            </form>
      </div>
    );
  }
}

export default Checkboxes;