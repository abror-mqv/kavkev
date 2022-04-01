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

import { Category } from "./shop/pages/Category";
import { Shop } from "./shop/pages/Shop";
import { ProductDetail } from "./shop/pages/ProductDetail";
import { Cart } from "./shop/pages/Cart/Cart";
import { CheckOut } from "./shop/pages/CheckOut/CheckOut";
import { ShopChoseLogReg } from "./shop/pages/reg/choselogreg";
import { ShopLogin } from "./shop/pages/reg/ShopLogin";
import { ShopReg } from "./shop/pages/reg/shopReg";
import { ShopRegPassword } from "./shop/pages/reg/regpassword";

import { Footer } from "./components/Footer";

import logo from "./media/logo.svg";

import { CLaptops } from './loxi/laptops.js'
import { CPhone } from './loxi/phone.js'
import { CPS4 } from './loxi/ps4.js'
import { CSamokat } from './loxi/samokat.js'
import { CSandwiches } from './loxi/sandwiches.js'
import { CThermos } from './loxi/thermos'
import { CVelosiped } from './loxi/velosiped.js'
import { CYandex } from './loxi/yandex.js'
import { CAlls } from './loxi/alls.js'

function App() {
    const isSession = () => {
        if (typeof localStorage.userToken !== "undefined") {
            return Profile;
        } else {
            return ChoseLogReg;
        }
    };

    console.log(isSession());

    return (
        <div className="App">

            <img className="logo" src={logo} alt="KavKev" />
            <Suspense fallback={null}>
            <div style={{
                minHeight: "calc(100vh - 100px)"
            }}
            >
                <Router>
                    <Switch>
                        <Route exact path="/" component={isSession()} />
                        <Route
                            exact
                            path="/invalid-url"
                            component={ErrorPage}
                        />
                        <Route exact path="/claptops"
                            component={CLaptops}
                        />
                        <Route exact path="/cphone"
                            component={CPhone}
                        />
                        <Route exact path="/cps4"
                            component={CPS4}
                        />
                        <Route exact path="/csandwiches"
                            component={CSandwiches}
                        />
                        <Route exact path="/cthermos"
                            component={CThermos}
                        />
                        <Route exact path="/cyandex"
                            component={CYandex}
                        />
                        <Route exact path="/csamokat"
                            component={CSamokat}
                        />
                        <Route exact path="/cvelosiped"
                            component={CVelosiped}
                        />
                        <Route exact path="/call"
                            component={CAlls}
                        />
                        <Route exact path="/shop/cart" component={Cart} />
                        <Route
                            exact
                            path="/shop/reg-password"
                            component={ShopRegPassword}
                        />
                        <Route
                            exact
                            path="/shop/registration"
                            component={ShopReg}
                        />
                        <Route exact path="/shop/login" component={ShopLogin} />
                        <Route
                            exact
                            path="/shop/chose-log-reg"
                            component={ShopChoseLogReg}
                        />
                        <Route exact path="/shop" component={Shop} />

                        <Route
                            exact
                            path="/shop/product/:productId"
                            component={ProductDetail}
                        />

                        <Route
                            exact
                            path="/shop/checkout"
                            component={CheckOut}
                        />
                        <Route
                            exact
                            path="/shop/:categoryId"
                            component={Category}
                        />
                        <Route
                            exact
                            path="/chose-log-reg"
                            component={ChoseLogReg}
                        />
                        <Route
                            exact
                            path="/chose-log-reg"
                            component={ChoseLogReg}
                        />
                        <Route
                            exact
                            path="/registration"
                            component={Registration}
                        />
                        <Route exact path="/contest-about" component={About} />
                        <Route exact path="/login" component={Login} />
                        <Route
                            exact
                            path="/reg-password"
                            component={RegPassword}
                        />
                        <Route exact path="/profile" component={Profile} />
                        <Route path="/:tokenSlug" component={Step1} />
                    </Switch>
                </Router>
                </div>
                <Footer/>
            </Suspense>
            
           
        </div>
    );
}

export default App;
