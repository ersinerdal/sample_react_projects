import React, {Component} from 'react';

class Result extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((item,i) => <li key={i}>{item}</li>)
        }
      </ul>
    );
  }
}

//remove item props from results comp. or state
Result.defaultProps = {
  items: ["default-props-1","default-props-2"]
}

//not mandatory
Result.propTypes = {
  items: React.PropTypes.array.isRequired
}


// var Result = React.createClass({
//     getDefaultProps: function() {
//       return {
//         items: ["default-props-1-b","default-props-2-b"]
//       };
//     },
//     propTypes: {
//       items: React.PropTypes.array.isRequired
//     },
//     render:function () {
//       return(
//         <ul>
//           {
//             this.props.items.map(function (item,i) {
//               return <li key={i}>{item}</li>
//             })
//           }
//         </ul>
//       )
//     }
// })

export default Result;
