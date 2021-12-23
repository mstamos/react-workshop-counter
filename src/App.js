import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './App.css';

export function Buttons({increase, decrease}) {
  return (
    <div>
      <button data-testid="plus" onClick={increase}>+</button>
      <button data-testid="minus" onClick={decrease}>-</button>
    </div> 
  )
}

Buttons.propTypes = {
  increase: PropTypes.func,
  decrease: PropTypes.func
}

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  }

  const decrease = () => {
    setCounter(counter - 1);
  }

  if (counter < 0) {
    return (
      <div className="App">
        <div data-testid="counter-result">:-)</div>
        <Buttons increase={increase} decrease={decrease}/>
      </div>
    )
  }

    return (
      <div className="App">
        <div data-testid="counter-result">Counter: {counter} </div>
        <Buttons increase={increase} decrease={decrease}/>
      </div> 
    )

}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state= {
//       counter: 0
//     }
//   }

//   increase = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

//   decrease = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   }

//   render() {
//     return (
//     <div className="App">
//       <div>Counter: {this.state.counter}</div>
//       <div>
//         <button onClick={this.increase}>+</button>
//         <button onClick={this.decrease}>-</button>
//       </div>
//     </div> 
//     )
//   }

// }


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
