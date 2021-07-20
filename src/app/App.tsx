import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import {SuperComponents} from "./SuperComponents";
import {PageNotFound} from "./404";
import {Profile} from "./Profile";
import {SignUp} from "./SignUp";
import {NewPassword} from "./newPassword";
import {PasswordRecovery} from "./passwordRecovery";
import {SignIn} from "./SignIn";
import {MainPage} from "./MainPage";

function App() {
  return (
      <BrowserRouter>
    <div className={'App'}>
        <Switch>
            <Route exact path={'/'} render={() => <MainPage/>}/>
            <Route exact path={'/newpassword'} render={() => <NewPassword />}/>
            <Route exact path={'/passwordrecovery'} render={() => <PasswordRecovery />}/>
            <Route exact path={'/profile'} render={() => <Profile />}/>
            <Route exact path={'/signin'} render={() => <SignIn />}/>
            <Route exact path={'/signup'} render={() => <SignUp />}/>
            <Route exact path={'/supercomponents'} render={() => <SuperComponents />}/>
            <Route path={'/404'} render={() => <PageNotFound />}/>
            <Redirect from={'*'} to={'/404'}/>
        </Switch>

    </div>
      </BrowserRouter>
  );
}

export default App;
