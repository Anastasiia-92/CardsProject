import React from 'react';
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
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
