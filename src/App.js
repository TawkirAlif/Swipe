import "./App.css";
import Welcome from "./Welcome";
import Login from "./Login";
import MainPage from "./MainPage";
import TakeUserInfo from "./TakeUserInfo.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = 'tawkir';
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/welcome">
                <Welcome />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/takeuserinfo">
                <TakeUserInfo />
              </Route>
              <Route path="/feed">
                <MainPage />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
