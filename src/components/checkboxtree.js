// import React from 'react';
// import CheckboxTree from 'react-checkbox-tree';
// import 'react-checkbox-tree/lib/react-checkbox-tree.css';

// const nodes = [{
//     value: 'mars',
//     label: 'Mars',
//     children: [
//         { value: 'phobos', label: 'Phobos' },
//         { value: 'deimos', label: 'Deimos' },
//     ],
// }];

// class CodeTree extends React.Component {
//     state = {
//         checked: [],
//         expanded: [],
//     };

//     render() {
//         return (
//             <CheckboxTree
//                 nodes={nodes}
//                 checked={this.state.checked}
//                 expanded={this.state.expanded}
//                 onCheck={checked => this.setState({ checked })}
//                 onExpand={expanded => this.setState({ expanded })}
//             />
//         );
//     }
// }
// export default CodeTree