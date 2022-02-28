import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [userID, setUserID] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (response) => {
    console.log(response);
    setUserID(response.userID);
    setName(response.name);
  };

  const handleLogout = () => {
    window.FB.logout();
    setUserID("");
    setName("");
  };
  return (
    <div className="App">
      <NavBar
        onLogin={handleLogin}
        userID={userID}
        onLogout={handleLogout}
        name={name}
      />
      <Switch>
        {/* <Route exact path="/" component={Properties} /> */}
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
