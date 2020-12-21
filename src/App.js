import "./App.css";
import LoginComponent from "./Components/Homepage";
import CreateAccount from "./Components/CreateAccount";
import SignIn from "./Components/SignIn";
import Homepage from "./Components/Homepage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <LoginComponent />
          <Route path="/" exact component={Homepage} />
          <Route path="/create" component={CreateAccount} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </div>
    </Router>
  );
}

export default App;
