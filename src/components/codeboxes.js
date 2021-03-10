import React, { Component } from "react";
import Checkbox from "./checkbox";


import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
// import { makeStyles } from '@material-ui/core/styles';


import codelist from '../data/codes.json'
const OPTIONS = codelist.map(c => c.code)

class Codeboxes extends Component {
  
  state = {
    checkboxes: OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    ),
    selectAll: false,
  };

  selectAllCheckboxes = (isSelected, allnone) => {
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
      this.props.setCode(retVal)
  };

  render() {
    return (
      <div className={this.props.classes.checkboxes}>
            <form  onSubmit={this.handleFormSubmit}>

              <div className={this.props.classes.filterlists}>
              <TreeView
                className={this.props.classes.treeroot}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
              >
                <TreeItem nodeId="0" className={this.props.classes.codelistitem} label={<label>
                  <input
                    type="checkbox"
                    name="select all"
                    onChange={e => this.selectAllCheckboxes(e.target.checked)}
                    className="form-check-input"
                  /><span >

                  Select All
                  </span>
                </label>} />
                    
<TreeItem nodeId="i" className={this.props.classes.codelistitem} label="i. Attitudes">
<TreeItem nodeId="ia" className={this.props.classes.codelistitem} label="ia. Education">
<TreeItem nodeId="ia1" className={this.props.classes.codelistitem} label="ia1. Secular">
<TreeItem nodeId="ia1a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia1a" id="ia1a" label="Elementary, Higher (High School and College)" isSelected={this.state.checkboxes["ia1a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ia1b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia1b" id="ia1b" label="Foreign Languages" isSelected={this.state.checkboxes["ia1b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ia1c" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia1c" id="ia1c" label="Taxation for Public Schools" isSelected={this.state.checkboxes["ia1c"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ia1d" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia1d" id="ia1d" label="Special Endowments" isSelected={this.state.checkboxes["ia1d"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ia2" className={this.props.classes.codelistitem} label="ia2. Parochial">
<TreeItem nodeId="ia2a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia2a" id="ia2a" label="Elementary, Higher (High School and College)" isSelected={this.state.checkboxes["ia2a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ia2b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia2b" id="ia2b" label="Foreign Languages" isSelected={this.state.checkboxes["ia2b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ia2c" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia2c" id="ia2c" label="Contributions" isSelected={this.state.checkboxes["ia2c"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ia2d" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia2d" id="ia2d" label="Special Endowments" isSelected={this.state.checkboxes["ia2d"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ia3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ia3" id="ia3" label="Adult Education" isSelected={this.state.checkboxes["ia3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ib" className={this.props.classes.codelistitem} label="ib. Mores">
<TreeItem nodeId="ib1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ib1" id="ib1" label="Temperance" isSelected={this.state.checkboxes["ib1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ib2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ib2" id="ib2" label="Blue Laws" isSelected={this.state.checkboxes["ib2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ib3" className={this.props.classes.codelistitem} label="ib3. Family Organization">
<TreeItem nodeId="ib3a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ib3a" id="ib3a" label="Marriage" isSelected={this.state.checkboxes["ib3a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ib3b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ib3b" id="ib3b" label="Parent-Child Relationship" isSelected={this.state.checkboxes["ib3b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ib3c" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ib3c" id="ib3c" label="Family Economic Organization" isSelected={this.state.checkboxes["ib3c"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ib4" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ib4" id="ib4" label="Religious Customs and Practices" isSelected={this.state.checkboxes["ib4"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ic" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ic" id="ic" label="Own and Other National or Language Groups" isSelected={this.state.checkboxes["ic"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="id" className={this.props.classes.codelistitem} label="id. Economic Organization">
<TreeItem nodeId="id1" className={this.props.classes.codelistitem} label="id1. Capitalistic Enterprise">
<TreeItem nodeId="id1a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id1a" id="id1a" label="Big Business" isSelected={this.state.checkboxes["id1a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="id1b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id1b" id="id1b" label="Small Business" isSelected={this.state.checkboxes["id1b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="id2" className={this.props.classes.codelistitem} label="id2. Labor Organization and Activities">
<TreeItem nodeId="id2a" className={this.props.classes.codelistitem} label="id2a. Unions">
<TreeItem nodeId="id2a1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id2a1" id="id2a1" label="Company" isSelected={this.state.checkboxes["id2a1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="id2a2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id2a2" id="id2a2" label="Craft" isSelected={this.state.checkboxes["id2a2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="id2a3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id2a3" id="id2a3" label="Industrial" isSelected={this.state.checkboxes["id2a3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="id2a4" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id2a4" id="id2a4" label="Strikes" isSelected={this.state.checkboxes["id2a4"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="id2b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id2b" id="id2b" label="Cooperative" isSelected={this.state.checkboxes["id2b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="id2c" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="id2c" id="id2c" label="Unemployment" isSelected={this.state.checkboxes["id2c"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
</TreeItem>
<TreeItem nodeId="ie" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ie" id="ie" label="Social Organization" isSelected={this.state.checkboxes["ie"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="if" className={this.props.classes.codelistitem} label="if. Politics">
<TreeItem nodeId="if1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="if1" id="if1" label="Voting as Blocs" isSelected={this.state.checkboxes["if1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="if2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="if2" id="if2" label="Part Played by Social and Political Societies" isSelected={this.state.checkboxes["if2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="if3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="if3" id="if3" label="Programs and Purposes" isSelected={this.state.checkboxes["if3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="if4" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="if4" id="if4" label="Extent of Influence" isSelected={this.state.checkboxes["if4"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="if5" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="if5" id="if5" label="Political Leadership" isSelected={this.state.checkboxes["if5"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="if6" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="if6" id="if6" label="Graft and Corruption" isSelected={this.state.checkboxes["if6"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ig" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ig" id="ig" label="War" isSelected={this.state.checkboxes["ig"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ih" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ih" id="ih" label="Social Problems and Social Legislation" isSelected={this.state.checkboxes["ih"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ij" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ij" id="ij" label="Interpretation of American History" isSelected={this.state.checkboxes["ij"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="ik" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="ik" id="ik" label="Position of Women and Feminism" isSelected={this.state.checkboxes["ik"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="il" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="il" id="il" label="Agriculture in the United States" isSelected={this.state.checkboxes["il"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="im" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="im" id="im" label="Health and Sanitation" isSelected={this.state.checkboxes["im"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="ii" className={this.props.classes.codelistitem} label="ii. Contributions and Activities">
<TreeItem nodeId="iia" className={this.props.classes.codelistitem} label="iia. Vocational">
<TreeItem nodeId="iia1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia1" id="iia1" label="Professional" isSelected={this.state.checkboxes["iia1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iia2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia2" id="iia2" label="Industrial and Commercial" isSelected={this.state.checkboxes["iia2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iia3" className={this.props.classes.codelistitem} label="iia3. Aesthetic">
<TreeItem nodeId="iia3a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia3a" id="iia3a" label="Arts and Handicrafts" isSelected={this.state.checkboxes["iia3a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iia3b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia3b" id="iia3b" label="Music" isSelected={this.state.checkboxes["iia3b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iia3c" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia3c" id="iia3c" label="Painting and Sculpture" isSelected={this.state.checkboxes["iia3c"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iia3d" className={this.props.classes.codelistitem} label="iia3d. Theatrical">
<TreeItem nodeId="iia3d1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia3d1" id="iia3d1" label="Drama" isSelected={this.state.checkboxes["iia3d1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iia3d2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iia3d2" id="iia3d2" label="Dancing" isSelected={this.state.checkboxes["iia3d2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
</TreeItem>
</TreeItem>
<TreeItem nodeId="iib" className={this.props.classes.codelistitem} label="iib. Avocational and Intellectual">
<TreeItem nodeId="iib1" className={this.props.classes.codelistitem} label="iib1. Aesthetic">
<TreeItem nodeId="iib1a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1a" id="iib1a" label="Music" isSelected={this.state.checkboxes["iib1a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib1b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1b" id="iib1b" label="Painting and Sculpture" isSelected={this.state.checkboxes["iib1b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib1c" className={this.props.classes.codelistitem} label="iib1c. Theatrical">
<TreeItem nodeId="iib1c1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1c1" id="iib1c1" label="Drama" isSelected={this.state.checkboxes["iib1c1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib1c2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1c2" id="iib1c2" label="Dancing" isSelected={this.state.checkboxes["iib1c2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib1c3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1c3" id="iib1c3" label="Festivals, Pageants, Fairs and Expositions" isSelected={this.state.checkboxes["iib1c3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iib1d" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1d" id="iib1d" label="Literary Societies" isSelected={this.state.checkboxes["iib1d"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib1e" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib1e" id="iib1e" label="Literature" isSelected={this.state.checkboxes["iib1e"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iib2" className={this.props.classes.codelistitem} label="iib2. Intellectual">
<TreeItem nodeId="iib2a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2a" id="iib2a" label="Libraries" isSelected={this.state.checkboxes["iib2a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2b" id="iib2b" label="Museums" isSelected={this.state.checkboxes["iib2b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2c" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2c" id="iib2c" label="Scientific and Historical Societies" isSelected={this.state.checkboxes["iib2c"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2d" className={this.props.classes.codelistitem} label="iib2d. Publications">
<TreeItem nodeId="iib2d1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2d1" id="iib2d1" label="Newspapers" isSelected={this.state.checkboxes["iib2d1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2d2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2d2" id="iib2d2" label="Periodicals" isSelected={this.state.checkboxes["iib2d2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2d3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2d3" id="iib2d3" label="Books" isSelected={this.state.checkboxes["iib2d3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iib2e" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2e" id="iib2e" label="Radio Programs and Cinema" isSelected={this.state.checkboxes["iib2e"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2f" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2f" id="iib2f" label="Special Schools and Classes" isSelected={this.state.checkboxes["iib2f"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iib2g" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib2g" id="iib2g" label="Forums, Discussion Groups and Lectures" isSelected={this.state.checkboxes["iib2g"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iib3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iib3" id="iib3" label="Athletics and Sports" isSelected={this.state.checkboxes["iib3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iic" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iic" id="iic" label="Permanent Memorials" isSelected={this.state.checkboxes["iic"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid" className={this.props.classes.codelistitem} label="iid. Benevolent and Protective Institutions">
<TreeItem nodeId="iid1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid1" id="iid1" label="Benevolent Societies" isSelected={this.state.checkboxes["iid1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid10" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid10" id="iid10" label="Foreign and Domestic Relief" isSelected={this.state.checkboxes["iid10"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid2" id="iid2" label="Insurance Companies" isSelected={this.state.checkboxes["iid2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid3" id="iid3" label="Hospitals, Clinics and Medical Aid" isSelected={this.state.checkboxes["iid3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid4" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid4" id="iid4" label="Orphanages and Creches" isSelected={this.state.checkboxes["iid4"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid5" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid5" id="iid5" label="Homes for the Aged" isSelected={this.state.checkboxes["iid5"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid6" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid6" id="iid6" label="Settlement Houses and Community Centers" isSelected={this.state.checkboxes["iid6"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid7" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid7" id="iid7" label="Organizations for Legal Assistance" isSelected={this.state.checkboxes["iid7"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid8" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid8" id="iid8" label="Employment Agencies" isSelected={this.state.checkboxes["iid8"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iid9" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iid9" id="iid9" label="Extra-Legal Organizations" isSelected={this.state.checkboxes["iid9"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iie" className={this.props.classes.codelistitem} label="iie. Crime and Delinquency">
<TreeItem nodeId="iie1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iie1" id="iie1" label="Organized Crime" isSelected={this.state.checkboxes["iie1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iie2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iie2" id="iie2" label="Individual Crime" isSelected={this.state.checkboxes["iie2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iie3" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iie3" id="iie3" label="Crime Prevention" isSelected={this.state.checkboxes["iie3"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iif" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iif" id="iif" label="Real Estate Transfers and Building Activities" isSelected={this.state.checkboxes["iif"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iii" className={this.props.classes.codelistitem} label="iii. Assimilation">
<TreeItem nodeId="iiia" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiia" id="iiia" label="Segregation" isSelected={this.state.checkboxes["iiia"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiib" className={this.props.classes.codelistitem} label="iiib. Nationalistic Societies and Influences">
<TreeItem nodeId="iiib1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiib1" id="iiib1" label="Effect upon United States Government and State Policies" isSelected={this.state.checkboxes["iiib1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiib2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiib2" id="iiib2" label="Activities of Nationalistic Societies" isSelected={this.state.checkboxes["iiib2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiib3" className={this.props.classes.codelistitem} label="iiib3. Commemoration of Holidays">
<TreeItem nodeId="iiib3a" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiib3a" id="iiib3a" label="National" isSelected={this.state.checkboxes["iiib3a"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiib3b" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiib3b" id="iiib3b" label="Religious" isSelected={this.state.checkboxes["iiib3b"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiib4" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiib4" id="iiib4" label="Conventions and Conferences" isSelected={this.state.checkboxes["iiib4"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
</TreeItem>
<TreeItem nodeId="iiic" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiic" id="iiic" label="National Churches and Sects" isSelected={this.state.checkboxes["iiic"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiid" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiid" id="iiid" label="Participation in United States Service" isSelected={this.state.checkboxes["iiid"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiie" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiie" id="iiie" label="Youth Organizations" isSelected={this.state.checkboxes["iiie"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiif" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiif" id="iiif" label="Special Contributions to Early American Development" isSelected={this.state.checkboxes["iiif"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiig" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiig" id="iiig" label="Immigration and Emigration" isSelected={this.state.checkboxes["iiig"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="iiih" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iiih" id="iiih" label="Relations with Homeland" isSelected={this.state.checkboxes["iiih"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="iv" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="iv" id="iv" label="Representative Individuals" isSelected={this.state.checkboxes["iv"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="v" className={this.props.classes.codelistitem} label="v. Miscellaneous Characteristics">
<TreeItem nodeId="va" className={this.props.classes.codelistitem} label="va. Foreign Origins">
<TreeItem nodeId="va1" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="va1" id="va1" label="Geographical" isSelected={this.state.checkboxes["va1"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
<TreeItem nodeId="va2" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="va2" id="va2" label="Social and Occupational" isSelected={this.state.checkboxes["va2"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
<TreeItem nodeId="vb" className={this.props.classes.codelistitem} label={<Checkbox doubleid={true} key="vb" id="vb" label="Picturesque Miscellanies" isSelected={this.state.checkboxes["vb"]} onCheckboxChange={this.handleCheckboxChange}/>}></TreeItem>
</TreeItem>
              </TreeView>
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

export default Codeboxes;