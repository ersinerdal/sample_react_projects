import React, {Component} from 'react';
import Pager from './Pager'

class Result extends Component {
  componentWillMount() {
    console.log('Results WILL MOUNT!')
  }

  componentDidMount() {
    console.log('Results DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
    console.log('Results WILL RECIEVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('Results SHOULD UPDATE!')
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Results WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Results DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('Results WILL UNMOUNT!')
  }
  render() {
    console.log('Results RENDER!')
    return (
      <div>
        <ul>
          {
            this.props.items.map((item,i) => {
              return <li key={i}>{item} <button onClick={()=>this.props.removeItem(item)} >x</button></li> /*runs function without arrow func*/
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
