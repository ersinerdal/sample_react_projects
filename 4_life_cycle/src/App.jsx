import React, {Component} from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
     <div>
       <Header />
       <Main />
       <Footer />
     </div>
    );
  }
}


export default App;
