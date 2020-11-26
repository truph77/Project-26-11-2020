import "./App.css";
import LoginComponent from "./Components/Login";
import CreateAccount from "./Components/CreateAccount";
import SignIn from "./Components/SignIn";
import Login from "./Components/Login";
// import Routers from "./authed";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <LoginComponent />
          {/* <CreateAccount /> */}
          {/* <SignIn /> */}
          {/* <Routers /> */}
          <Route path="/" exact component={Login} />
          <Route path="/create" component={CreateAccount} />
          <Route path="/sign-in" component={SignIn} />
        </div>
      </div>
    </Router>
  );
}

export default App;
