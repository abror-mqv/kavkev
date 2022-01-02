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
import { ChoseLogReg } from "./steps/ChoseLogReg";
import { About } from "./steps/About";
import logo from "./media/logo.svg";

function App() {
    const isSession = () => {
        if(typeof localStorage.userToken !== "undefined"){
            return(Profile)
        }else{
            return(ChoseLogReg)
        }
    }

    console.log(isSession())

    

    return (
    
        <div className="App">
            <img className="logo" src={logo} alt="KavKev" />
            <Suspense fallback={null}>
                <DataProvider />
                <Router>
                    <Switch>
                        <Route exact path="/" component={isSession()} />
                        <Route
                            exact
                            path="/invalid-url"
                            component={ErrorPage}
                        />
                        <Route
                            exact
                            path="/chose-log-reg"
                            component={ChoseLogReg}
                        />
                        <Route exact path="/contest-about" component={About} />
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
                        <Route path="/:tokenSlug" component={Step1} />
                    </Switch>
                </Router>
            </Suspense>
        </div>
    );
}

export default App;
