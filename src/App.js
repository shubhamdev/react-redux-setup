import './App.css';
import {Child} from './components/Child'
//Redux
import { connect } from 'react-redux';
import {addTodo} from './actions/action';


function App(props) {


  const name = (name) => {

    props.addTodo(Math.random())
    debugger;

  }
 
  debugger;

  return (
    <div className="App">
      <header className="App-header">
        {props.data}
        <button
            onClick={name}
          >
            Click Me!
          </button>

          <Child></Child>
      </header>
    </div>
  );
}

// Map state to propes
const mapStateToProps = state => ({
  data: state.addTodo,
});

// Map Dispatch actions with propes
const mapDispatchToProps = {
  addTodo,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
