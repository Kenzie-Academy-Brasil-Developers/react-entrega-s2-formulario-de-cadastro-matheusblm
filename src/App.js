import "./App.css";
import FormLogin from "./Components/FormLogin";
import { Switch, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import { useState } from "react";
function App() {
  const [user, setUser] = useState();
  const [auto, setAuto] = useState(false);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <FormLogin setUser={setUser} setAuto={setAuto} />
        </Route>
        <Route exact path="/Welcome">
          {auto && <Welcome user={user} setAuto={setAuto} />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
