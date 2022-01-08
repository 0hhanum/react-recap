import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Movie from "./components/Movie";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


const App = () => {
    return <Router>
        <Switch>
            <Route path="/movie">
                <Detail />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
}

export default App;
