
import './App.css';
import './SignUp';
import ListShow from './ListShow';
import SignIn from './SignIn';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import SignUp from './SignUp';
function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/signup" exact component={SignUp}></Route>
      <Route path="/" exact component={SignIn}></Route>
      <Route path="/user" exact component={ListShow}></Route>
      </Router>
    </div>
  );
}

export default App;
