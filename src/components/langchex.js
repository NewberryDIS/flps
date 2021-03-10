import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import langs from '../data/langs'

function CheckBox({name, value, tick, onCheck, index, show}) {
    const count = 2134
    return (
        <label style={{display: 'block'}}>
            <input
                name={name}
                type="checkbox"
                value={value}
                checked={tick || false}
                onChange={onCheck}
            />
            {value + " ("  + count + ")"}
        </label>
    );
}

function CheckBoxList ({options, isCheckedAll, onCheck}) {
    const [ show, setShow] = useState(false)
    const checkBoxOptions = (
        <div className="checkbox-list">
            {options.map((option) => <CheckBox key={option.lid} show={show} index={option.lid} name={option.name} value={option.value} tick={option.checked} onCheck={(e) => onCheck(option.lid, e.target.checked)} />)}
        </div>
    );

    return (
        <div className="checkbox-list" ><div style={{margin: '5px 25px', maxHeight: (show ? '200vh' : '20vh'), overflow: 'hidden', transition: 'all 1s'}}>
            Select a Language/Group
            <CheckBox name="select-all" value="Select All" tick={isCheckedAll} onCheck={(e) => onCheck('all', e.target.checked)} />
            {checkBoxOptions}
            
        </div>
        <div style={{margin: '0px 0px 0px 50px', transition: 'all 2s'}} onClick={() => setShow(!show)}><span>{show ? 'Fewer' : 'More'}</span> <span style={{transform: 'rotate(45deg)', padding: '0px 7px 0px 5px'}}>&#9658;</span></div>
        </div>
    );
}

const langArray = langs.map(l =>  {
    return {name: 'lang', value: l.lang, lid: l.lang_id, checked: false}})

class LangList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAllSelected: false,
            checkList: langArray
        };
    }

    onCheckBoxChange(checkName, isChecked) {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;
        console.log(checkName)
        let langArray = [this.props.lang, checkName]
        let langString = JSON.stringify(langArray)
        console.log(langString)
        this.props.setLang(langString)
        // if (langArray.indexOf(checkName) === -1 && isChecked){
        //     if (this.props.lang.indexOf(',') > -1){
        //         let langArray = this.props.lang.split(',').push(checkName)
        //         let langString = JSON.stringify(langArray)
        //         console.log(langString)
        //         this.props.setLang(langString)
        //     } else {
        //         let newLangArray = [this.props.lang, checkName]
        //         // newLangArray.push(checkName)
        //         let newLangString = JSON.stringify(newLangArray)
        //         console.log(newLangString)
        //         this.props.setLang(newLangString)
        //     }
        //     // console.log(this.props.lang)
        // } else if (langArray.indexOf(checkName > -1 && !isChecked)){

        //     let langArray = this.props.lang.split(',')
        //     let index = langArray.indexOf(checkName)
        //     langArray.splice(index, 1);
        //     let langString = JSON.stringify(langArray)
        //     this.props.setLang(langString)
        //     console.log(this.props.lang)
        // } else {
        //     console.log('something went wrong with language fileter :  ' + checkName + " & " + isChecked)
        //     console.log(this.props.lang)
        // }
        const checkList = this.state.checkList.map((lang, index) => {
            if(isAllChecked || lang.value === checkName) {
                return Object.assign({}, lang, {
                    checked,
                });
            } else if (isAllUnChecked) {
                return Object.assign({}, lang, {
                    checked: false,
                });
            }

            return lang;
        });

        let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

        this.setState({
            checkList,
            isAllSelected,
        });

    }

    render() {
        return (<CheckBoxList options={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} />);
    }
}
export default LangList