import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

//IMPORTAÇÃO DAS PAGINAS 
import Register from './pages/Register'
import Keys from './pages/Keys'
import Services from './pages/Services'
import Collaborators from './pages/Collaborators'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>App</h1>} />
            <Route exact path="/registrar" component={Register} />
            <Route exact path="/chaves" component={Keys} />
            <Route exact path="/servicos" component={Services} />
            <Route exact path="/colaboradores" component={Collaborators} />
            <Route exact path="/*" component={() => <h1>404 not found :(</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes
