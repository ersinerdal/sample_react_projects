import React, {Component} from 'react';

class Main extends Component {
  getText(text){
    return `lorem ipsum ${text} sit amed`;
  }
  render() {
    console.log(q)
    return (
      <h3 className="red">
        Hello World, <i>{this.getText("dolor")}</i>
      </h3>
    );
  }
}

export default Main;
