import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import { SignUp, SignIn, Home, Products, Settings } from './Pages'

export const Routes: React.FC = () => {
  return (
    <Router>
      <>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/products" component={Products}/>
        <Route path="/settingsForUserId/:id" component={Settings}/>
      </Switch>
      </>
    </Router>
  )
}
