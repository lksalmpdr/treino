import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../../services/auth';
import PageDefault from '../../pages/pageDefault/PageDefault';
import Home from '../../pages/home/Home';
import SignUp from '../../pages/signIn/SignUp';

const Pagina404 = () =>{
    return(
      <PageDefault>
        <h2>Não encontramos essa página.</h2>
        <h4>Volte para <a href='/'>Home</a>.</h4>
      </PageDefault>
    )
  }

const PrivateRoute =({ component: Component, ...rest })=>{
    // eslint-disable-next-line no-unused-expressions
    return(
    <Route
        {...rest}
        render={props=> isAuthenticated() ? 
            (
                <Component {...props} />
                ) :
            (
                <Redirect to={{ pathname:"/", state:{from: props.location} }} />
            )
        } />
    )
}

const Routes = () =>{
    // eslint-disable-next-line no-unused-expressions
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=> <SignUp /> } />
            <Route path="/signup" component={() =>  <PageDefault><h1>SignUp</h1></PageDefault> } />
            <PrivateRoute path="/app" component={() => <PageDefault><Home /></PageDefault> } />
            <Route path="*" component={Pagina404} />
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;