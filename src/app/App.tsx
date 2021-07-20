import React from 'react';
import './App.css';
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'
import {SuperComponents} from "../features/SuperComponents";
import {PageNotFound} from "../features/404";
import {Profile} from "../features/Profile";
import {SignUp} from "../features/SignUp";
import {NewPassword} from "../features/newPassword";
import {PasswordRecovery} from "../features/passwordRecovery";
import {SignIn} from "../features/SignIn";
import {MainPage} from "../features/MainPage";

function App() {
  return (
      <HashRouter>
    <div className={'App'}>
        <Switch>
            <Route exact path={'/'} render={() => <MainPage/>}/>
            <Route path={'/newpassword'} render={() => <NewPassword />}/>
            <Route path={'/passwordrecovery'} render={() => <PasswordRecovery />}/>
            <Route path={'/profile'} render={() => <Profile />}/>
            <Route path={'/signin'} render={() => <SignIn />}/>
            <Route path={'/signup'} render={() => <SignUp />}/>
            <Route path={'/supercomponents'} render={() => <SuperComponents />}/>
            <Route path={'/404'} render={() => <PageNotFound />}/>
            <Redirect from={'*'} to={'/404'}/>
        </Switch>

    </div>
      </HashRouter>
  );
}

export default App;
