import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/views/home/home";
import About from "./components/views/about/about";
import Services from "./components/views/services/services";
import Depoiments from "./components/views/depoiment/depoiment";
import Contacts from "./components/views/contact/contact";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/service" component={Services} />
                <Route path="/contact" component={Contacts} />
                <Route path="/depoiment" component={Depoiments} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;