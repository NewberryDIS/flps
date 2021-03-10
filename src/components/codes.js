import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import codes from '../data/py_codes.json'

const useStyles = makeStyles({
  root: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    overflow: 'auto',
    maxHeight: '300px',    
    padding: '5px',
      boxShadow: 'inset 0px 3px 1px -2px rgb(0 0 0 / 20%), inset 0px 2px 2px 0px rgb(0 0 0 / 14%), inset 0px 1px 5px 0px rgb(0 0 0 / 12%)',
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


const Tree = ({data, setCode, setPage, codeCount, classes }) => {
    
// function selectCode (c, count) {
//   if ( count > 1 ) {
//     console.log('select code function')
//     setPage(0)
//     setCode(c)
//     // setCodeText(t)
//   }
// }
    return (
      <>
            {data && data.map(item => {
              // let count = codeCount && codeCount.find(c => c.code_id === item.id) ? codeCount.find(c => c.code_id === item.id)['count(*)'] : 0
              // let label = item.children.length > 0 ? item.title : item.title + ' (' + count + ')'
              return (<div>
                <TreeItem key={item.id} nodeId={item.key} label={item.key + '. ' + item.title} className={classes.codelistitem}>
                {/* <TreeItem key={item.id} nodeId={item.key} label={item.key + '. ' + item.title + (count > 0 ? ' (' + count + ')': '')} onClick={() => selectCode(item.id, count)} className={classes.codelistitem}> */}
                  {item.children.length > 0 && <Tree data={item.children} classes={classes} setCode={setCode} setPage={setPage} codeCount={codeCount} />}
                </TreeItem>
              </div>
              )
            })}
        </>
    )
}
