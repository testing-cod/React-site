import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default">Left</button>
              <button type="button" className="btn btn-default">Middle</button>
              <button type="button" className="btn btn-default">Right</button>
          </div> 
          <Header /> 
      </div>
    );
  }
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <div className="btn-group" role="group" aria-label="...">
//               <button type="button" className="btn btn-default">Left</button>
//               <button type="button" className="btn btn-default">Middle</button>
//               <button type="button" className="btn btn-default">Right</button>
//           </div>  
//       </div>
//     );
//   }
// }

// export default App;