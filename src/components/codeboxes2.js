import React, { Component } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TreeItem from '@material-ui/lab/TreeItem';
import codes from '../data/py_codes.json'
import codelist from '../data/codes.json'
import Checkbox from './checkbox'


const OPTIONS = codelist.map(c => c.code_id)

class Codes extends Component {
    constructor(props) {
        super(props);
            this.state = {
            checkboxes: OPTIONS.reduce(
                (options, option) => ({
                ...options,
                [option]: false
            }),
            {}
        )
    }};
  
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
  
    createCheckbox = (option, count) => (
        <Checkbox
            label={option.title + " (" + count + ")"}
            isSelected={this.state.checkboxes[option.id]}
            onCheckboxChange={this.handleCheckboxChange}
            key={option.id}
        />
    );
  
    createCheckboxes = () => OPTIONS.map(this.createCheckbox);
  
    render() {
        return (
            <div className={this.props.classes.checkboxes}>
                <form  onSubmit={this.handleFormSubmit}>
                    <div className={this.props.classes.filterlists}>
                        <TreeView
                            className={this.props.classes.tree}
                            defaultCollapseIcon={<ExpandMoreIcon />}
                            defaultExpandIcon={<ChevronRightIcon />}
                        >
                            <Tree 
                                data={codes} 
                                classes={this.props.classes}
                                setCode={this.props.setCode} 
                                setPage={this.props.setPage} 
                                codeCount={this.props.codeCount} 
                                createCheckbox={this.createCheckbox}
                            />
                        </TreeView>
                    </div>
                    <div >
                        <ButtonGroup 
                            className={this.props.classes.buttongroup} 
                            variant="contained" 
                            size="small" 
                            aria-label="contained primary button group"
                        >
                            <Button
                                type="button"
                                onClick={this.selectAll} 
                                variant="contained" 
                            >
                                Select All
                            </Button>
                            <Button
                                type="button"
                                onClick={this.deselectAll}
                            >
                                Deselect All
                            </Button>
                        </ButtonGroup>
                        <Button 
                            type="submit" 
                            className={this.props.classes.button} 
                            variant="contained" 
                            size="small"
                        >
                            Select Categories
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}
  
const Tree = ({
    data, 
    setCode, 
    setPage, 
    codeCount, 
    classes, 
    createCheckbox
    }) => ( <>
        {data && data.map(item => {
            let count = codeCount && codeCount.find(c => c.code_id === item.id) ? codeCount.find(c => c.code_id === item.id)['count(*)'] : 0
            let label = item.children.length > 0 ? item.title : createCheckbox(item, count)
            return (<div>
            <TreeItem 
                key={item.id} 
                nodeId={item.key} 
                label={label} 
                className={classes.codelistitem}
            >
                    {item.children.length > 0 && <Tree 
                        data={codes} 
                        classes={classes}
                        setCode={setCode} 
                        setPage={setPage} 
                        codeCount={codeCount} 
                        createCheckbox={createCheckbox}
                    /> }
            </TreeItem>
            </div>
            )
        })}
    </>
)


export default Codes