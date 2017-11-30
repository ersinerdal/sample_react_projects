import React, {Component} from 'react';
import Button from '../components/Button';
import Result from '../components/Result';
import { connect } from 'react-redux'
import {getItems,addItem,removeItem,getAsyncItems} from '../reducers'

class Main extends Component {
  constructor(){
    super();
  }
  componentDidMount(){
    this.props.onGetItems();
  }
  handleClick(e){
    const {itemToAdd} = this.refs;
    this.props.onAddItem(itemToAdd.value )
    itemToAdd.value = ""
  }
  render() {
    return (
      <div>
        <input type="text" ref="itemToAdd" />
        <Button text="Ekle" buttonOnClick={(e) => this.handleClick(e)} />
        <Result items={this.props.items} removeItemHandler={this.props.onRemoveItem} />

        <p>
          <button onClick={this.props.onGetAsycItems}>async items</button>
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onGetItems: () => dispatch(getItems()), //{type: "GET_ITEMS"}
    onAddItem: (item) => dispatch(addItem(item)),
    onRemoveItem: (item) => dispatch(removeItem(item)),
    onGetAsycItems: () => dispatch(getAsyncItems()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Main); // x mapStateToProps ---> dispatch
