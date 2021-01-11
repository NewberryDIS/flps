import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import codes from '../data/py_codes.json'
import sqlcodes from '../data/codes.json'

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    width: '90%',
    margin: 'auto',
    maxWidth: 400,
  },
});

export default function Codes(props) {
  const classes = useStyles();
// console.log(props.codeList)
  // const newCodeList = codes.map(c => {

  // })
  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
        <Tree data={codes} classes={props.classes} setCode={props.setCode} setPage={props.setPage} codeCount={props.codeCount} codeText={props.codeText} setCodeText={props.setCodeText} />
    </TreeView>
  );
}


const Tree = ({data, setCode, setPage, codeCount, classes, codeText, setCodeText }) => {
    const selectCode = (c, t) => {
      if ( c !== 'none' ) {
        setPage(0)
        setCode(c)
        setCodeText(t)
      }
    }
    return (
      <>
            {data && data.map(item => {
              let dimmed = codeCount && item.id in codeCount ? '' : classes.dimmed 
              let count = codeCount && item.id in codeCount ? codeCount[item.id] : 0
              let filter = codeCount && item.id in codeCount ? item.key : 'none'
              // console.log(item.id in codeCount)
              return (
                <TreeItem onClick={() => selectCode(filter, item.title)} key={item.id} disabled className={dimmed} nodeId={item.key} label={item.title + " (" + item.key + ")" + ' (' + count + ')'}  >
                  {item.children.length > 0 && <Tree data={item.children} classes={classes} setCode={setCode} setPage={setPage} codeCount={codeCount} codeText={codeText} setCodeText={setCodeText}/>}
                </TreeItem>
              )
            })}
        </>
    )
}
