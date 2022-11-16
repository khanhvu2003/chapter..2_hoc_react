import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './component/MyComponent'
import react from 'react'

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     // <div>
//     //   khánh vũ 
//     //   <MyComponent> </MyComponent>
//     // </div>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           khánh vũ
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

class App extends react.Component {
  state = {
    name: '10',
    address: "ninh bình",
    age: 19

  }
  render() {
    return (
      <div className='App-container'>
        <MyComponent> </MyComponent>
      </div>
    );
  }
}


export default App;
