import React, {Component} from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <div>
         {this.props.children}
       </div>
       <Footer />
     </div>
    );
  }
}


export default App;
