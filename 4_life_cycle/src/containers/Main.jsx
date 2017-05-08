import React, {Component} from 'react';
import Button from '../components/Button';
import Result from '../components/Result';

class Main extends Component {
  constructor(){
    super();
    this.state = {
      items:["item-a-1","item-a-2","item-a-3"]
    }
  }
  handleClick(e){
    const {itemToAdd} = this.refs;
    const newItems = [ ...this.state.items, itemToAdd.value ];
    this.setState({items:newItems});
    itemToAdd.value = ""
  }
  removeItemHandler(item){
    const items = this.state.items.filter((itemInArray) => itemInArray !== item)
    this.setState({items:items});
  }
  render() {
    return (
      <div>
        <input type="text" ref="itemToAdd" />
        <Button text="Ekle" buttonOnClick={(e) => this.handleClick(e)} /> {/*to pass (this) to method arrow func or bind(this)*/}
        <Result items={this.state.items} removeItem={this.removeItemHandler.bind(this) } />
      </div>
    );
  }
}

export default Main;
