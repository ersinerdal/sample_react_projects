import React, {Component} from 'react';
import Pager from './Pager'

class Result extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.items.map((item,i) => {
              return <li key={i}>{item} <button onClick={this.props.removeItem.bind(this,i)} >x</button></li>
            })
          }
        </ul>
        {this.props.items.length > 5 && <Pager />}
      </div>
    );
  }
}
Result.defaultProps = {
  items: ["default-props-1","default-props-2"]
}
Result.propTypes = {
  items: React.PropTypes.array.isRequired
}

export default Result;
