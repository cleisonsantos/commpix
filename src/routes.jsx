import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Services from './pages/Services'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>App</h1>} />
            <Route exact path="/servicos" component={Services} />
            <Route exact path="/colaboradores" component={() => <h1>Colaboradores</h1>} />
            <Route exact path="/*" component={() => <h1>404 not found :(</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes