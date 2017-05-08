import React, {Component} from 'react';
import Button from '../components/Button';
import Result from '../components/Result';

class Main extends Component {
  constructor(){ //not mandatory
    super(); //calls parents constructor - super(props) if props needed
    this.state = {
    }
  }
  handleClick(){
    const {itemToAdd} = this.refs; //object destructuring
    const newItems = [ ...this.state.items, itemToAdd.value ]; //object spread
    this.setState({items:newItems}); //dont mutate the state!!!!!
  }
  render() {
    return (
      <div>
        <input type="text" ref="itemToAdd" />
        <Button text="Ekle" buttonOnClick={(e) => this.handleClick(e)} />
        {/*<Button text="Ekle" buttonOnClick={this.handleClick.bind(this)} />*/}
        <Result items={this.state.items} />
      </div>
    );
  }
}

// var Main = React.createClass({
//     getInitialState:function () {
//       return {
//         items:["item-b-1","item-b-2","item-b-3"]
//       }
//     },
//     handleClick(){
//       var itemToAdd = this.refs.itemToAdd; //es5
//       //var newItems = this.state.items.([itemToAdd.value]);
//       // const newItems = this.state.items.splice();
//       // newItems.push(itemToAdd.value)
//       this.setState({items:newItems});
//     },
//     render:function () {
//       return(
//         <div>
//           <input type="text" ref="itemToAdd" />
//           <Button text="Ekle" buttonOnClick={this.handleClick}/> {/*react handles this bind*/}
//           <Result items={this.state.items} />
//         </div>
//       )
//     }
// })

export default Main;
