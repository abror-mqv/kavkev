import React, { Suspense } from "react";

import "./App.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./i18n";
import { DataProvider } from "./DataContext";
import { Step1 } from "./steps/Step1";
import ErrorPage from "./steps/ErrorPage";
import { Login } from "./steps/Login";
import { Registration } from "./steps/Registration";
import { RegPassword } from "./steps/RegPassword";
import { Profile } from "./steps/Profile";
import { LogPassword } from "./steps/LogPassword";
import { ChoseLogReg } from "./steps/ChoseLogReg";
import { About } from "./steps/About";
import logo from './media/logo.svg'

function App() {
    return (
        <div className="App">
            <img className="logo" src={logo} alt="KavKev"/>
            <Suspense fallback={null}>
                <DataProvider />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route
                            exact
                            path="/s/:tokenSlug"
                            component={Step1}
                        />
                        <Route
                            exact
                            path="/chose-log-reg"
                            component={ChoseLogReg}
                        />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/registration"
                            component={Registration}
                        />
                        <Route
                            exact
                            path="/reg-password"
                            component={RegPassword}
                        />
                        <Route exact path="/profile" component={Profile} />
                        <Route
                            exact
                            path="/log-password"
                            component={LogPassword}
                        />

                        <Route path="/" component={ErrorPage} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
